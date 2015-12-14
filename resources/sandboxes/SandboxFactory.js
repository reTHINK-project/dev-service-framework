(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.activate = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _srcBusMiniBus = require('../../src/bus/MiniBus');

var _srcBusMiniBus2 = _interopRequireDefault(_srcBusMiniBus);

var _srcSandboxSandbox = require('../../src/sandbox/Sandbox');

var _srcSandboxSandbox2 = _interopRequireDefault(_srcSandboxSandbox);

var _srcSandboxSandboxRegistry = require('../../src/sandbox/SandboxRegistry');

var _srcSandboxSandboxRegistry2 = _interopRequireDefault(_srcSandboxSandboxRegistry);

// Mockup code for testing

var AppSandboxBrowser = (function (_Sandbox) {
  _inherits(AppSandboxBrowser, _Sandbox);

  function AppSandboxBrowser() {
    _classCallCheck(this, AppSandboxBrowser);

    _get(Object.getPrototypeOf(AppSandboxBrowser.prototype), 'constructor', this).call(this);
    var _this = this;
    console.log('AppSandboxBrowser');

    //simulate sandbox frontier
    _this._bus = new _srcBusMiniBus2['default']();
    _this._bus._onPostMessage = function (msg) {
      console.log('AppSandboxBrowser._onPostMessage -> external: ', JSON.stringify(msg));

      //redirect messages to the external part of the sandbox
      _this._onMessage(msg);
    };

    _this._sbr = new _srcSandboxSandboxRegistry2['default'](_this._bus);
    _this._sbr._create = function (url, sourceCode, config) {
      console.log('SandboxRegistry._create ', url, config);
      window.eval(sourceCode);
      return activate(url, _this._bus, config);
    };

    //for testing, this make components accessible from browser console
    window.components = _this._sbr.components;
  }

  _createClass(AppSandboxBrowser, [{
    key: '_onPostMessage',
    value: function _onPostMessage(msg) {
      var _this = this;
      console.log('AppSandboxBrowser._onPostMessage -> internal: ', JSON.stringify(msg));

      //redirect messages to the internal part of the sandbox
      _this._bus._onMessage(msg);
    }
  }]);

  return AppSandboxBrowser;
})(_srcSandboxSandbox2['default']);

exports['default'] = AppSandboxBrowser;
module.exports = exports['default'];

},{"../../src/bus/MiniBus":4,"../../src/sandbox/Sandbox":5,"../../src/sandbox/SandboxRegistry":6}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _srcBusMiniBus = require('../../src/bus/MiniBus');

var _srcBusMiniBus2 = _interopRequireDefault(_srcBusMiniBus);

var _srcSandboxSandbox = require('../../src/sandbox/Sandbox');

var _srcSandboxSandbox2 = _interopRequireDefault(_srcSandboxSandbox);

var _srcSandboxSandboxRegistry = require('../../src/sandbox/SandboxRegistry');

var _srcSandboxSandboxRegistry2 = _interopRequireDefault(_srcSandboxSandboxRegistry);

// Mockup code for testing

var SandboxBrowser = (function (_Sandbox) {
  _inherits(SandboxBrowser, _Sandbox);

  function SandboxBrowser() {
    _classCallCheck(this, SandboxBrowser);

    _get(Object.getPrototypeOf(SandboxBrowser.prototype), 'constructor', this).call(this);
    var _this = this;
    console.log('Sandbox Browser');

    //simulate sandbox frontier
    _this._bus = new _srcBusMiniBus2['default']();
    _this._bus._onPostMessage = function (msg) {
      console.log('SandboxBrowser._onPostMessage -> external: ', JSON.stringify(msg));

      //redirect messages to the external part of the sandbox
      _this._onMessage(msg);
    };

    _this._sbr = new _srcSandboxSandboxRegistry2['default'](_this._bus);
    _this._sbr._create = function (url, sourceCode, config) {
      console.log('SandboxRegistry._create ', url, config);
      window.eval(sourceCode);
      window.vertx = new VertxProtoStub(url, _this._bus, config);
      return window.vertx;
    };
  }

  _createClass(SandboxBrowser, [{
    key: '_onPostMessage',
    value: function _onPostMessage(msg) {
      var _this = this;
      console.log('SandboxBrowser._onPostMessage -> internal: ', JSON.stringify(msg));

      //redirect messages to the internal part of the sandbox
      _this._bus._onMessage(msg);
    }
  }]);

  return SandboxBrowser;
})(_srcSandboxSandbox2['default']);

exports['default'] = SandboxBrowser;
module.exports = exports['default'];

},{"../../src/bus/MiniBus":4,"../../src/sandbox/Sandbox":5,"../../src/sandbox/SandboxRegistry":6}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _SandboxBrowser = require('./SandboxBrowser');

var _SandboxBrowser2 = _interopRequireDefault(_SandboxBrowser);

var _AppSandboxBrowser = require('./AppSandboxBrowser');

var _AppSandboxBrowser2 = _interopRequireDefault(_AppSandboxBrowser);

var SandboxFactory = (function () {
  function SandboxFactory() {
    _classCallCheck(this, SandboxFactory);
  }

  _createClass(SandboxFactory, [{
    key: 'createSandbox',
    value: function createSandbox() {
      var _this = this;
      return new _SandboxBrowser2['default'](_this._messageBus);
    }
  }, {
    key: 'createAppSandbox',
    value: function createAppSandbox() {
      var _this = this;
      return new _AppSandboxBrowser2['default'](_this._messageBus);
    }
  }, {
    key: 'removeSandbox',
    value: function removeSandbox() {}
  }, {
    key: 'messageBus',
    get: function get() {
      var _this = this;
      return _this._messageBus;
    },
    set: function set(messageBus) {
      var _this = this;
      _this._messageBus = messageBus;
    }
  }]);

  return SandboxFactory;
})();

exports['default'] = SandboxFactory;
module.exports = exports['default'];

},{"./AppSandboxBrowser":1,"./SandboxBrowser":2}],4:[function(require,module,exports){
/**
* @author micaelpedrosa@gmail.com
* Minimal interface and implementation to send and receive messages. It can be reused in many type of components.
* Components that need a message system should receive this class as a dependency or extend it.
* Extensions should implement the following private methods: _onPostMessage and _registerExternalListener
*/
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MiniBus = (function () {
  /* private
  _msgId: number;
  _subscriptions: <url: MsgListener[]>
   _responseTimeOut: number
  _responseCallbacks: <url+id: (msg) => void>
  */

  function MiniBus() {
    _classCallCheck(this, MiniBus);

    var _this = this;
    _this._msgId = 0;
    _this._subscriptions = {};

    _this._responseTimeOut = 3000; //default to 3s
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

  _createClass(MiniBus, [{
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
    * Send messages to local listeners, or if not exists to external listeners.
    * It's has an optional mechanism for automatic management of response handlers.
    * The response handler will be unregistered after receiving the response, or after response timeout (default to 3s).
    * @param  {Message} msg Message to send. Message ID is automatically added to the message.
    * @param  {Function} responseCallback Optional parameter, if the developer what's automatic response management.
    * @return {number} Returns the message ID, in case it should be needed for manual management of the response handler.
    */
  }, {
    key: 'postMessage',
    value: function postMessage(msg, responseCallback) {
      var _this = this;

      //TODO: how do we manage message ID's? Should it be a global runtime counter, or per URL address?
      //Global counter will not work, because there will be multiple MiniBus instances!
      //Per URL, can be a lot of data to maintain!
      //Maybe a counter per MiniBus instance. This is the assumed solution for now.
      if (!msg.id) {
        _this._msgId++;
        msg.id = _this._msgId;
      }

      //automatic management of response handlers
      if (responseCallback) {
        (function () {
          var responseId = msg.from + msg.id;
          _this._responseCallbacks[responseId] = responseCallback;

          setTimeout(function () {
            var responseFun = _this._responseCallbacks[responseId];
            delete _this._responseCallbacks[responseId];

            if (responseFun) {
              var errorMsg = {
                id: msg.id, type: 'response',
                body: { code: 'error', desc: 'Response timeout!' }
              };

              responseFun(errorMsg);
            }
          }, _this._responseTimeOut);
        })();
      }

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

      return msg.id;
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

    //publish on a subscription list.
  }, {
    key: '_publishOn',
    value: function _publishOn(itemList, msg) {
      itemList.forEach(function (sub) {
        sub._callback(msg);
      });
    }
  }, {
    key: '_onResponse',
    value: function _onResponse(msg) {
      var _this = this;

      if (msg.type === 'response') {
        var responseId = msg.to + msg.id;
        var responseFun = _this._responseCallbacks[responseId];
        delete _this._responseCallbacks[responseId];

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
          //is there any "*" (default) listeners?
          itemList = _this._subscriptions['*'];
          if (itemList) {
            _this._publishOn(itemList, msg);
          }
        }
      }
    }

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

  return MiniBus;
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

exports['default'] = MiniBus;
module.exports = exports['default'];

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _sandboxSandboxRegistry = require('../sandbox/SandboxRegistry');

var _sandboxSandboxRegistry2 = _interopRequireDefault(_sandboxSandboxRegistry);

var _busMiniBus = require('../bus/MiniBus');

var _busMiniBus2 = _interopRequireDefault(_busMiniBus);

// import MessageFactory from '../../resources/MessageFactory';

/**
 * @author micaelpedrosa@gmail.com
 * Base class to implement external sandbox component
 */

var Sandbox = (function (_MiniBus) {
  _inherits(Sandbox, _MiniBus);

  function Sandbox() {
    _classCallCheck(this, Sandbox);

    _get(Object.getPrototypeOf(Sandbox.prototype), 'constructor', this).call(this);

    var _this = this;

    // Add Message Factory
    // let messageFactory = new MessageFactory();
    // _this.messageFactory = messageFactory;
  }

  /**
   * Deploy an instance of the component into the sandbox.
   * @param  {string} componentSourceCode Component source code (Hyperty, ProtoStub, etc)
   * @param  {URL} componentURL Hyperty, ProtoStub, or any other component address.
   * @param  {Config} configuration Config parameters of the component
   * @return {Promise<string>} return deployed if successful, or any other string with an error
   */

  _createClass(Sandbox, [{
    key: 'deployComponent',
    value: function deployComponent(componentSourceCode, componentURL, configuration) {

      var _this = this;

      // let messageFactory = _this.messageFactory;

      return new Promise(function (resolve, reject) {
        //TODO: message format is not properly defined yet
        var deployMessage = {
          type: 'create', from: _sandboxSandboxRegistry2['default'].ExternalDeployAddress, to: _sandboxSandboxRegistry2['default'].InternalDeployAddress,
          body: { url: componentURL, sourceCode: componentSourceCode, config: configuration }
        };

        // createMessageRequest(from, to, contextId, value, policy, idToken, accessToken, resource, signature)
        // let deployMessage = messageFactory.createMessageRequest(SandboxRegistry.ExternalDeployAddress, SandboxRegistry.InternalDeployAddress, 'deploy', {url: componentURL, sourceCode: componentSourceCode, config: configuration});

        //send message into the sandbox internals and wait for reply
        _this.postMessage(deployMessage, function (reply) {
          if (reply.body.code === 200) {
            //is this response complaint with the spec?
            resolve('deployed');
          } else {
            reject(reply.body.desc);
          }
        });
      });
    }

    /**
     * Remove the instance of a previously deployed component.
     * @param  {URL} componentURL Hyperty, ProtoStub, or any other component address.
     * @return {Promise<string>} return undeployed if successful, or any other string with an error
     */
  }, {
    key: 'removeComponent',
    value: function removeComponent(componentURL) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        //TODO: message format is not properly defined yet
        var removeMessage = {
          type: 'delete', from: _sandboxSandboxRegistry2['default'].ExternalDeployAddress, to: _sandboxSandboxRegistry2['default'].InternalDeployAddress,
          body: { url: componentURL }
        };

        //send message into the sandbox internals and wait for reply
        _this.postMessage(removeMessage, function (reply) {
          if (reply.body.code === 200) {
            //is this response complaint with the spec?
            resolve('undeployed');
          } else {
            reject(reply.body.desc);
          }
        });
      });
    }
  }]);

  return Sandbox;
})(_busMiniBus2['default']);

exports['default'] = Sandbox;
module.exports = exports['default'];

},{"../bus/MiniBus":4,"../sandbox/SandboxRegistry":6}],6:[function(require,module,exports){
/**
 * @author micaelpedrosa@gmail.com
 * Base class to implement internal deploy manager of components.
 */

// import MessageFactory from '../../resources/MessageFactory';

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var SandboxRegistry = (function () {
  /* private
  _components: <url: instance>
  */

  function SandboxRegistry(bus) {
    _classCallCheck(this, SandboxRegistry);

    var _this = this;

    _this._bus = bus;
    _this._components = {};

    // Add Message Factory
    // let messageFactory = new MessageFactory();
    // _this.messageFactory = messageFactory;

    bus.addListener(SandboxRegistry.InternalDeployAddress, function (msg) {
      //console.log('SandboxRegistry-RCV: ', msg);
      // let responseMsg = {
      //   id: msg.id, type: 'response', from: SandboxRegistry.InternalDeployAddress, to: SandboxRegistry.ExternalDeployAddress
      // };

      switch (msg.type) {
        case 'create':
          _this._onDeploy(msg);break;
        case 'delete':
          _this._onRemove(msg);break;
      }
    });
  }

  _createClass(SandboxRegistry, [{
    key: '_responseMsg',
    value: function _responseMsg(msg, code, value) {

      var _this = this;

      // let messageFactory = _this.messageFactory;

      var responseMsg = {
        id: msg.id, type: 'response', from: SandboxRegistry.InternalDeployAddress, to: SandboxRegistry.ExternalDeployAddress
      };

      // Chanege the origin message, because the response;
      // msg.from = SandboxRegistry.InternalDeployAddress;
      // msg.to = SandboxRegistry.ExternalDeployAddress;

      var body = {};
      if (code) body.code = code;
      if (value) body.desc = value;

      responseMsg.body = body;

      // return messageFactory.createResponse(msg, code, value);
      return responseMsg;
    }
  }, {
    key: '_onDeploy',
    value: function _onDeploy(msg) {
      var _this = this;
      var responseCode = undefined;
      var responseDesc = undefined;

      if (!_this._components.hasOwnProperty(msg.body.url)) {
        try {
          eval(msg.body.sourceCode);
          _this._components[msg.body.url] = _this._create(msg.body.url, msg.body.sourceCode, msg.body.config);
          responseCode = 200;
        } catch (error) {
          responseCode = 500;
          responseDesc = error;
        }
      } else {
        responseCode = 500;
        responseDesc = 'Instance ' + msg.body.url + ' already exist!';
      }

      // Create response message with MessageFactory
      var responseMsg = _this._responseMsg(msg, responseCode, responseDesc);
      _this._bus.postMessage(responseMsg);
    }
  }, {
    key: '_onRemove',
    value: function _onRemove(msg) {
      var _this = this;
      var componentURL = msg.body.url;
      var responseCode = undefined;
      var responseDesc = undefined;

      if (_this._components.hasOwnProperty(componentURL)) {
        //remove component from the pool and all listeners
        delete _this._components[componentURL];
        _this._bus.removeAllListenersOf(componentURL);
        responseCode = 200;
      } else {
        responseCode = 500;
        responseDesc = 'Instance ' + componentURL + ' doesn\'t exist!';
      }

      var responseMsg = _this._responseMsg(msg, responseCode, responseDesc);

      _this._bus.postMessage(responseMsg);
    }

    /**
     * This method should be implemented by the internal sandbox code.
     * @param  {ComponentURL} url URL used for the instance
     * @param  {string} sourceCode Code of the component
     * @param  {Config} config Configuration parameters
     * @return {Object} Returns instance of the component or throw an error "throw 'error message'"
     */
  }, {
    key: '_create',
    value: function _create(url, sourceCode, config) {
      //implementation specific
      /* example code:
        eval(sourceCode);
        return activate(url, _this._bus, config);
      */
    }
  }, {
    key: 'components',
    get: function get() {
      return this._components;
    }
  }]);

  return SandboxRegistry;
})();

SandboxRegistry.ExternalDeployAddress = 'sandbox://external';
SandboxRegistry.InternalDeployAddress = 'sandbox://internal';

exports['default'] = SandboxRegistry;
module.exports = exports['default'];

},{}]},{},[3])(3)
});

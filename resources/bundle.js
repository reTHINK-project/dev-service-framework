(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.activate = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
* Identity Provider Proxy
*/
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports['default'] = activate;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var IdpProxy = (function () {
  function IdpProxy() {
    _classCallCheck(this, IdpProxy);
  }

  /**
  * Identity Provider Proxy Protocol Stub
  */

  _createClass(IdpProxy, null, [{
    key: 'generateAssertion',

    /**
    * Function to generate an identity Assertion
    * TODO add details of the implementation
    *
    * @param  {contents} The contents includes information about the identity received
    * @param  {origin} Origin parameter that identifies the origin of the RTCPeerConnection
    * @param  {usernameHint} optional usernameHint parameter
    * @return {Promise} returns a promise with an identity assertion
    */
    value: function generateAssertion(contents, origin, hint) {
      return new Promise(function (resolve, reject) {
        resolve('assertionGenerated ' + contents);
      });
    }

    /**
    * Function to validate an identity Assertion received
    * TODO add details of the implementation
    *
    * @param  {assertion}    Identity Assertion to be validated
    * @param  {origin}       Origin parameter that identifies the origin of the RTCPeerConnection
    * @return {Promise}      Returns a promise with the identity assertion validation result
    */
  }, {
    key: 'validateAssertion',
    value: function validateAssertion(assertion, origin) {
      return new Promise(function (resolve, reject) {
        resolve('assertionValidated');
      });
    }

    /**
    * Function to obtain an user identity
    * TODO add details of the implementation
    * @param  {scope}     Scope
    * @return {Promise} returns a promise an URL so the Identity Module can use to obtain an identity
    */
  }, {
    key: 'getIdentityAssertion',
    value: function getIdentityAssertion(scope) {
      return new Promise(function (resolve, reject) {
        resolve('URL');
      });
    }
  }]);

  return IdpProxy;
})();

exports.IdpProxy = IdpProxy;

var IdpProxyProtoStub = (function () {

  /**
  * Constructor of the IdpProxy Stub
  * The constructor add a listener in the messageBus received and start a web worker with the idpProxy received
  *
  * @param  {URL.RuntimeURL}                            runtimeProtoStubURL runtimeProtoSubURL
  * @param  {Message.Message}                           busPostMessage     configuration
  * @param  {ProtoStubDescriptor.ConfigurationDataList} configuration      configuration
  */

  function IdpProxyProtoStub(runtimeProtoStubURL, bus, config) {
    _classCallCheck(this, IdpProxyProtoStub);

    var _this = this;
    _this.runtimeProtoStubURL = runtimeProtoStubURL;
    _this.messageBus = bus;
    _this.config = config;

    _this.messageBus.addListener('domain://idpProxy', function (msg) {
      _this.requestToIdp(msg);
    });
  }

  // export default IdpProxyProtoStub;

  /**
   * To activate this protocol stub, using the same method for all protostub.
   * @param  {URL.RuntimeURL}                            runtimeProtoStubURL runtimeProtoSubURL
   * @param  {Message.Message}                           busPostMessage     configuration
   * @param  {ProtoStubDescriptor.ConfigurationDataList} configuration      configuration
   * @return {Object} Object with name and instance of ProtoStub
   */

  /**
  * Function that see the intended method in the message received and call the respective function
  *
  * @param {message}  message received in the messageBus
  */

  _createClass(IdpProxyProtoStub, [{
    key: 'requestToIdp',
    value: function requestToIdp(msg) {
      var _this = this;
      var params = msg.body.params;
      switch (msg.body.method) {
        case 'login':
          _this.login().then(function (value) {
            _this.replyMessage(msg, value);
          });
          break;
        case 'generateAssertion':
          _this.generate(params).then(function (value) {
            _this.replyMessage(msg, value);
          });
          break;
        case 'validateAssertion':
          _this.validate(params).then(function (value) {
            _this.replyMessage(msg, value);
          });
          break;
        default:
          break;
      }
    }

    /**
    * function that makes a request for an identity assertion to the web worker running the idpProxy
    *
    * @param  {params}  parameters received in the message. In this case contains the content, origin and usernamehint
    * @return {Promise} returns a promise with an identity assertion generate by the idpProxy
    */
  }, {
    key: 'generate',
    value: function generate(params) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        IdpProxy.generateAssertion('contents', 'origin', 'hint').then(function (result) {
          resolve(result);
        });
      });
    }

    /**
    * function that makes a request to validate an identity assertion to the web worker running the idpProxy
    *
    * @param  {params}  parameters received in the message. In this case contains the identity assertion and origin
    * @return {Promise} returns a promise with the identity assertion validation result, received by the idpProxy
    */
  }, {
    key: 'validate',
    value: function validate(params) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        IdpProxy.validateAssertion('assertion', 'origin').then(function (result) {
          resolve(result);
        });
      });
    }

    /**
    * function that makes a request for a user identity to the web worker running the idpProxy
    *
    * @param  {params}  parameters received in the message. In this case contains the login scope
    * @return {Promise} returns a promise an URL so the Identity Module can use to obtain an identity
    */
  }, {
    key: 'login',
    value: function login(params) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        IdpProxy.getIdentityAssertion().then(function (result) {
          resolve(result);
        });
      });
    }

    /**
    * This function receives a message and a value. It replies the value to the sender of the message received
    *
    * @param  {message}   message received
    * @param  {value}     value to include in the new message to send
    */
  }, {
    key: 'replyMessage',
    value: function replyMessage(msg, value) {
      var _this = this;

      var message = { id: msg.id, type: 'response', to: msg.from, from: msg.to,
        body: { code: 200, value: value } };

      _this.messageBus.postMessage(message);
    }
  }]);

  return IdpProxyProtoStub;
})();

exports.IdpProxyProtoStub = IdpProxyProtoStub;

function activate(url, bus, config) {
  return {
    name: 'IdpProxyProtoStub',
    instance: new IdpProxyProtoStub(url, bus, config)
  };
}

},{}]},{},[1])(1)
});
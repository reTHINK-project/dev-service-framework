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

var _utilsEventEmitter = require('../utils/EventEmitter');

var _utilsEventEmitter2 = _interopRequireDefault(_utilsEventEmitter);

var ChatGroup = (function (_EventEmitter) {
  _inherits(ChatGroup, _EventEmitter);

  function ChatGroup(syncher, hypertyDiscovery) {
    _classCallCheck(this, ChatGroup);

    if (!syncher) throw Error('Syncher is a necessary dependecy');
    if (!hypertyDiscovery) throw Error('Hyperty discover is a necessary dependecy');

    _get(Object.getPrototypeOf(ChatGroup.prototype), 'constructor', this).call(this, syncher, hypertyDiscovery);

    var _this = this;
    _this._syncher = syncher;
    _this._hypertyDiscovery = hypertyDiscovery;

    _this._objectDescURL = 'hyperty-catalogue://localhost/.well-known/dataschemas/FakeDataSchema';

    syncher.onNotification(function (event) {
      console.log('Notification: ', event);
      _this.trigger('have:new:notification', event);
    });
  }

  _createClass(ChatGroup, [{
    key: '_processChildren',
    value: function _processChildren(children) {
      console.info('on add children: ', children);
    }

    /**
     * This function is used to send a chat message.
     * @param  {Message} message text to be send
     */
  }, {
    key: 'send',
    value: function send(message) {
      console.log(message, this);
      var _this = this;
      var dataObject = _this.dataObjectReporter ? _this.dataObjectReporter : _this.dataObjectObserver;

      return new Promise(function (resolve, reject) {

        dataObject.addChildren('message', { message: message }).then(function (result) {
          console.info(result);
          resolve(result);
        })['catch'](function (reason) {
          console.error('Reason:', reason);
          reject(reason);
        });
      });
    }

    /**
     * This function is used to close an existing Group Chat instance.
     *
     */
  }, {
    key: 'close',
    value: function close() {}
  }, {
    key: 'join',
    value: function join(resource) {

      var _this = this;

      return new Promise(function (resolve, reject) {

        _this.addParticipant(resource).then(function (result) {
          resolve('joined: ', result);
        })['catch'](function (reason) {
          reject(reason);
        });
      });
    }

    // TODO: improve this with an invite;
    /**
     * This function is used to add / invite new participant on an existing Group Chat instance.
     * @return {Promise} Promise with the status
     */
  }, {
    key: 'addParticipant',
    value: function addParticipant(resource) {

      var _this = this;
      var syncher = _this._syncher;

      return new Promise(function (resolve, reject) {

        console.info('------------------------ Syncher subscribe ---------------------- \n');
        console.info(resource);
        syncher.subscribe(_this._objectDescURL, resource).then(function (dataObjectObserver) {
          console.info('Data Object Observer: ', dataObjectObserver);
          _this.dataObjectObserver = dataObjectObserver;
        })['catch'](function (reason) {
          reject(reason);
        });
      });
    }

    /**
     * This function is used to remove a participant from an existing Group Chat instance.
     * @return {Promise} Promise with the status
     */
  }, {
    key: 'removeParticipant',
    value: function removeParticipant() {
      return new Promise(function (resolve, reject) {

        try {
          resolve('participant removed');
        } catch (e) {
          reject('remove participant fail');
        }
      });
    }

    /**
     * This function is used to open a Group Chat instance that was previously closed.
     * @return {[type]} [description]
     */
  }, {
    key: 'open',
    value: function open() {}
  }, {
    key: 'dataObjectReporter',
    set: function set(dataObjectReporter) {

      if (!dataObjectReporter) throw new Error('The data object reporter is necessary parameter');

      var _this = this;
      _this._dataObjectReporter = dataObjectReporter;

      var data = dataObjectReporter.data;

      console.info('Set data object reporter: ', data);

      dataObjectReporter.onSubscription(function (event) {
        console.log('Subscription: ', event);
        event.accept();

        _this.trigger('participant:added', event.url);
      });

      dataObjectReporter.onAddChildren(_this._processChildren);
    },
    get: function get() {
      var _this = this;
      return _this._dataObjectReporter;
    }
  }, {
    key: 'dataObjectObserver',
    set: function set(dataObjectObserver) {
      var _this = this;

      _this._dataObjectObserver = dataObjectObserver;

      console.log('set data Object Observer: ', dataObjectObserver);

      dataObjectObserver.onChange('*', function (event) {
        console.info('Change Event: ', event);
      });

      dataObjectObserver.onAddChildren(_this._processChildren);
    },
    get: function get() {
      var _this = this;
      return _this._dataObjectObserver;
    }
  }]);

  return ChatGroup;
})(_utilsEventEmitter2['default']);

exports['default'] = ChatGroup;
module.exports = exports['default'];

},{"../utils/EventEmitter":12}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var CommunicationStatus = {
  OPEN: 'open',
  PENDING: 'pending',
  CLOSED: 'closed',
  PAUSED: 'paused',
  FAILED: 'failed'
};

exports.CommunicationStatus = CommunicationStatus;

var Communication = function Communication() {
  _classCallCheck(this, Communication);

  var _this = this;

  _this.id = '';
  _this.host = '';
  _this.owner = '';
  _this.startingTime = '';
  _this.lastModified = '';
  _this.duration = '';
  _this.communicationStatus = '';
  _this.participant = '';
  _this.CommunicationQuality = '';
};

exports['default'] = Communication;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports['default'] = activate;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _hypertyDiscoveryHypertyDiscovery = require('../hyperty-discovery/HypertyDiscovery');

var _hypertyDiscoveryHypertyDiscovery2 = _interopRequireDefault(_hypertyDiscoveryHypertyDiscovery);

var _Communication = require('./Communication');

var _Communication2 = _interopRequireDefault(_Communication);

var _utilsUtils = require('../utils/utils');

var _syncherSyncher = require('../syncher/Syncher');

var _syncherSyncher2 = _interopRequireDefault(_syncherSyncher);

var _Chat = require('./Chat');

var _Chat2 = _interopRequireDefault(_Chat);

/**
* Hyperty Chat;
* @author Vitor Silva [vitor-t-silva@telecom.pt]
* @version 0.1.0
*/

var HypertyChat = (function () {
  function HypertyChat(hypertyURL, bus, configuration) {
    _classCallCheck(this, HypertyChat);

    if (!hypertyURL) throw new Error('The hypertyURL is a needed parameter');
    if (!bus) throw new Error('The MiniBus is a needed parameter');
    if (!configuration) throw new Error('The configuration is a needed parameter');

    // super(hypertyURL, bus, configuration);

    var _this = this;
    var syncher = new _syncherSyncher2['default'](hypertyURL, bus, configuration);

    var domain = (0, _utilsUtils.divideURL)(hypertyURL).domain;
    var hypertyDiscovery = new _hypertyDiscoveryHypertyDiscovery2['default'](domain, bus);

    _this._objectDescURL = 'hyperty-catalogue://localhost/.well-known/dataschemas/FakeDataSchema';

    _this._syncher = syncher;
    _this._hypertyDiscovery = hypertyDiscovery;
  }

  /**
   * This function is used to create a new Group Chat providing the identifier of the Group to be notified.
   * @param  {String} name             chat name
   * @param  {URL.UserURL} UserURLList List of User allowed
   * @return {Promise}
   */

  _createClass(HypertyChat, [{
    key: 'create',
    value: function create(name) {

      var _this = this;
      var syncher = _this._syncher;
      var hypertyDiscovery = _this._hypertyDiscovery;

      return new Promise(function (resolve, reject) {

        var communication = new _Communication2['default']();
        communication.id = name;

        console.info('------------------------ Syncher Create ---------------------- \n');
        syncher.create(_this._objectDescURL, [], { communication: communication }).then(function (dataObjectReporter) {
          console.info('3. Return Create Data Object Reporter', dataObjectReporter);

          var chat = new _Chat2['default'](syncher, hypertyDiscovery);
          chat.dataObjectReporter = dataObjectReporter;

          resolve(chat);
        })['catch'](function (reason) {
          reject(reason);
        });
      });
    }
  }, {
    key: '_mappingUser',
    value: function _mappingUser(userList) {

      var _this = this;

      return new Promise(function (resolve, reject) {
        var promiseList = [];

        userList.forEach(function (email) {
          promiseList.push(_this._hypertyDiscovery(email));
        });

        Promise.all(promiseList).then(function (values) {
          var hyperties = [];

          values.forEach(function (value) {
            hyperties.push(value.hypertyURL);
          });

          resolve(hyperties);
        })['catch'](function (reason) {
          reject(reason);
        });
      });
    }
  }]);

  return HypertyChat;
})();

function activate(hypertyURL, bus, configuration) {

  return {
    name: 'HypertyChat',
    instance: new HypertyChat(hypertyURL, bus, configuration)
  };
}

module.exports = exports['default'];

},{"../hyperty-discovery/HypertyDiscovery":4,"../syncher/Syncher":11,"../utils/utils":13,"./Chat":1,"./Communication":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _utilsUtilsJs = require('../utils/utils.js');

/**
* Core HypertyDiscovery interface
* Class to allow applications to search for hyperties using the message bus
*/

var HypertyDiscovery = (function () {

  /**
  * To initialise the HypertyDiscover, which will provide the support for hyperties to
  * query users registered in outside the internal core.
  * @param  {RuntimeURL}          runtimeURL            runtimeURL
  * @param  {MessageBus}          msgbus                msgbus
  */

  function HypertyDiscovery(domain, msgBus) {
    _classCallCheck(this, HypertyDiscovery);

    var _this = this;
    _this.messageBus = msgBus;

    _this.domain = domain;
    _this.discoveryURL = 'hyperty://' + domain + '/hypertyDisovery';
  }

  /**
  * function to request about users registered in domain registry, and
  * return the hyperty instance if found.
  * @param  {email}              email
  * @return {Promise}          Promise
  */

  _createClass(HypertyDiscovery, [{
    key: 'discoverHypertyPerUser',
    value: function discoverHypertyPerUser(email) {
      var _this = this;
      var identityURL = 'user://' + email.substring(email.indexOf('@') + 1, email.length) + '/' + email.substring(0, email.indexOf('@'));

      // message to query domain registry, asking for a user hyperty.
      var message = {
        type: 'READ', from: _this.discoveryURL, to: 'domain://registry.' + _this.domain + '/', body: { user: identityURL }
      };

      return new Promise(function (resolve, reject) {

        _this.messageBus.postMessage(message, function (reply) {

          var hypertyURL = reply.body.last;

          if (hypertyURL === undefined) {
            return reject('User Hyperty not found');
          }

          var idPackage = {
            id: email,
            descriptor: reply.body.hyperties[hypertyURL].descriptor,
            hypertyURL: hypertyURL
          };

          resolve(idPackage);
        });
      });
    }
  }]);

  return HypertyDiscovery;
})();

exports['default'] = HypertyDiscovery;
module.exports = exports['default'];

},{"../utils/utils.js":13}],5:[function(require,module,exports){
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
        console.log('Add Children: ', childURL);
        bus.addListener(childURL, function (msg) {
          console.log('Children: ', msg);
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
          } else {
            bus._onPostMessage(msg);
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

},{"./DataObjectChild":6,"./SyncObject":10}],6:[function(require,module,exports){
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
    key: 'childId',
    get: function get() {
      return this._childId;
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

},{"./SyncObject":10}],7:[function(require,module,exports){
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

},{"./DataObject":5}],8:[function(require,module,exports){
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
          var sub = { url: hypertyUrl, status: 'on' };
          _this._subscriptions[hypertyUrl] = sub;

          //send ok response message
          _this._bus.postMessage({
            id: msg.id, type: 'response', from: msg.to, to: msg.from,
            body: { code: 200, schema: _this._schema, version: _this._version, value: (0, _utilsUtilsJs.deepClone)(_this.data) }
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

},{"../utils/utils.js":13,"./DataObject":5}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

},{"../utils/utils.js":13}],11:[function(require,module,exports){
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

},{"./DataObjectObserver":7,"./DataObjectReporter":8,"./DataProvisional":9}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

},{}]},{},[3])(3)
});
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
import { deepClone } from '../utils/utils';

import DataObjectReporter from './DataObjectReporter';
import DataObjectObserver from './DataObjectObserver';
import DataProvisional from './DataProvisional';

/**
* The main class for the syncher package.
* The Syncher is a singleton class per Hyperty/URL and it is the owner of all created Data Sync Objects according to the Reporter - Observer pattern.
* Main functionality is to create reporters and to subscribe to existing ones.
*/
class Syncher {
  /* private
  _owner: URL
  _bus: MiniBus

  _subURL: URL

  _reporters: <url: DataObjectReporter>
  _observers: <url: DataObjectObserver>
  _provisionals: <url: DataProvisional>

  ----event handlers----
  _onNotificationHandler: (event) => void
  _onResume: (event) => void
  */

  /**
  * Constructor that should be used by the Hyperty owner
  * @param {HypertyURL} owner - Hyperty URL owner. An URL allocated by the runtime that uniquely identifies the Hyperty.
  * @param {MiniBus} bus - An instance of the MiniBus provided in the sandbox. When an object (Reporter or Observed) is created, the SyncherManager will add a listener in the MiniBus to receive/send Messages of that object.
  * @param {JSON} config - Configuration data. The only required field for now is the runtimeURL.
  */
  constructor(owner, bus, config) {
    let _this = this;

    _this._owner = owner;
    _this._bus = bus;

    _this._subURL = config.runtimeURL + '/sm';
    _this._runtimeUrl = config.runtimeURL;

    _this._reporters = {};
    _this._observers = {};
    _this._provisionals = {};

    bus.addListener(owner, (msg) => {
      //ignore msg sent by himself
      if (msg.from !== owner) {
        console.info('[Syncher] Syncher-RCV: ', msg, _this);
        switch (msg.type) {
          case 'forward': _this._onForward(msg); break;
          case 'create': _this._onRemoteCreate(msg); break;
          case 'delete': _this._onRemoteDelete(msg); break;
        }
      }
    });
  }

  /**
  * The owner of the Syncher and all created reporters.
  * @type {HypertyURL}
  */
  get owner() { return this._owner; }

  /**
  * All owned reporters, the ones that were created by a create
  * @type {Object<URL, DataObjectReporter>}
  */
  get reporters() { return this._reporters; }

  /**
  * All owned observers, the ones that were created by a local subscription
  * @type {Object<URL, DataObjectObserver>}
  */
  get observers() { return this._observers; }

  /**
  * Request a DataObjectReporter creation. The URL will be be requested by the allocation mechanism.
  * @param  {SchemaURL} schema - Hyperty Catalogue URL address that can be used to retrieve the JSON-Schema describing the Data Object schema
  * @param  {HypertyURL[]} observers - List of hyperties that are pre-authorized for subscription
  * @param  {JSON} initialData - Initial data of the reporter
  * @param  {boolean} store - (Optional) if true, object will be stored by the runtime
  * @param  {boolean} p2p - (Optional) if true, data synchronisation stream will use p2p connection as much as possible
  * @param  {MessageBodyIdentity} identity - (optional) identity data to be added to identity the user reporter. To be used for legacy identities.
  * @return {Promise<DataObjectReporter>} Return Promise to a new Reporter. The reporter can be accepted or rejected by the PEP
  */
  create(schema, observers, initialData, store = false, p2p = false, name = 'data object without name', identity, input) {

    if (!schema) throw Error('[Syncher - Create] - You need specify the data object schema');
    if (!observers) throw Error('[Syncher - Create] -The observers should be defined');

    //if (!initialData) throw Error('[Syncher - Create] - You initialData should be defined');

    let _this = this;
    let createInput  = Object.assign({}, input);

    createInput.p2p = p2p;
    createInput.store = store;
    createInput.schema = schema;
    createInput.observers = observers;
    (initialData) ? createInput.initialData = initialData : createInput.initialData = {};
    createInput.name = name;
    createInput.reporter = _this._owner;
    createInput.resume = false;

    if (identity)      { createInput.identity = identity; }

    //Object.assign(createInput, {resume: false});

    console.log('[syncher - create] - create Reporter - createInput: ', createInput);

    return _this._create(createInput);
  }

  /**
  * Request a DataObjectReporter creation. The URL will be be requested by the allocation mechanism.
  * @param  {Object} criteria - (optional) identity data to be added to identity the user reporter. To be used for legacy identities.
  * @return {Promise<DataObjectReporter>[]} Return a promise with a list of DataObjectReporter to be resumed;
  */
  resumeReporters(criteria) {
    let _this = this;
    console.log('[syncher - create] - resume Reporter - criteria: ', criteria);

    Object.assign(criteria, {resume: true});

    return _this._resumeCreate(criteria);
  }

  /**
  * Request a subscription to an existent reporter object.
  * @param {SchemaURL} schema - Hyperty Catalogue URL address that can be used to retrieve the JSON-Schema describing the Data Object schema
  * @param {ObjectURL} objURL - Address of the existent reporter object to be observed
  * @param {Boolean} [store=false] - Save the subscription on the Syncher Manager for further resume (Default is false)
  * @param {Boolean} [p2p=false] - Info about if should use p2p connection (Default is false)
  * @param {Boolean} [mutual=true] - Info about if messages of this object should be encrypted (Default is true)
  * @param  {MessageBodyIdentity} identity - (optional) identity data to be added to identity the user reporter. To be used for legacy identities.
  * @return {Promise<DataObjectObserver>} Return Promise to a new observer. It's associated with the reporter.
  */
  subscribe(schema, objURL, store = false, p2p = false, mutual = true, identity) {
    let _this = this;
    let criteria = {};

    criteria.p2p = p2p;
    criteria.store = store;
    criteria.schema = schema;

    criteria.resource = objURL;
    if (identity)      { criteria.identity = identity; }

    //TODO: For Further Study
    criteria.mutual = mutual;

    console.log('[syncher - subscribe] - subscribe criteria: ', criteria);

    Object.assign(criteria, {resume: false});

    return _this._subscribe(criteria);
  }

  /**
  * Request a subscription to an existent reporter object.
  * @param {criteria} criteria - Information to discovery the observer object
  * @return {Promise<DataObjectObserver>} Return Promise to a new observer. It's associated with the reporter.
  */
  resumeObservers(criteria) {
    let _this = this;
    let _criteria = criteria || {};

    Object.assign(_criteria, {resume: true});

    return _this._resumeSubscribe(_criteria);
  }

  /**
  * Request a read action on the reporter object
  * @param {ObjectURL} objURL - URL of the reporter object to be read
  * @return {Promise<Object>} Return Promise to last available data of the reporter
  */
  read(objURL) {
    let _this = this;

    //FLOW-OUT: this message will be sent directly to reporter object (maybe there is no listener available, so it will be resolved with MessageBus -> resolve)
    //will reach the remote object in DataObjectReporter -> _onRead
    let readMsg = {
      type: 'read', from: _this._owner, to: objURL
    };

    return new Promise((resolve, reject) => {
      _this._bus.postMessage(readMsg, (reply) => {
        console.log('read-response: ', reply);
        if (reply.body.code === 200) {
          resolve(reply.body.value);
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
  onNotification(callback) {
    this._onNotificationHandler = callback;
  }

  _create(input) {
    let _this = this;

    return new Promise((resolve, reject) => {
      let resume = input.resume;
      //let initialData = input.initialData || {};
      //let schema = criteria.schema;

      //pch: I've commented since this is not data
      /*initialData.reporter = _this._owner;
      initialData.schema = criteria.schema;*/

      input.created = (new Date).toISOString();

      let requestValue = input;

      delete requestValue.p2p;
      delete requestValue.store;
      delete requestValue.observers;
      delete requestValue.identity;

      //FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onCreate
      let requestMsg = {
        type: 'create', from: _this._owner, to: _this._subURL,
        body: { resume: resume, value: requestValue  }
      };


      //requestMsg.body.value = initialData;
      //requestMsg.body.reporter = _this._owner;
      requestMsg.body.schema = input.schema;

      if (input.p2p) requestMsg.body.p2p = input.p2p;
      if (input.store) requestMsg.body.store = input.store;
      if (input.observers) requestMsg.body.authorise = input.observers;
      if (input.identity) requestMsg.body.identity = input.identity;

      console.log('[syncher._create]: ', input, requestMsg);

      //request create to the allocation system. Can be rejected by the PolicyEngine.
      _this._bus.postMessage(requestMsg, (reply) => {
        console.log('[syncher - create] - create-response: ', reply);
        if (reply.body.code === 200) {
          //reporter creation accepted
          input.url = reply.body.resource;

          input.status = 'live';// pch: do we ned this?
          input.syncher = _this;

          let newObj = new DataObjectReporter(input);

          _this._reporters[input.url] = newObj;

          resolve(newObj);
        } else {
          //reporter creation rejected
          reject(reply.body.desc);
        }
      });
    });

  }

  _resumeCreate(criteria) {
    let _this = this;

    return new Promise((resolve, reject) => {
      let resume = criteria.resume;
      let initialData = criteria.initialData || {};

      //FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onCreate
      let requestMsg = {
        type: 'create', from: _this._owner, to: _this._subURL,
        body: { resume: resume }
      };

      console.log('[syncher - create]: ', criteria, requestMsg);

      requestMsg.body.value.data = initialData;
      requestMsg.body.value.reporter = _this._owner;

      if (criteria.p2p) requestMsg.body.p2p = criteria.p2p;
      if (criteria.store) requestMsg.body.store = criteria.store;
      if (criteria.observers) requestMsg.body.authorise = criteria.observers;
      if (criteria.identity) requestMsg.body.identity = criteria.identity;

      console.log('[syncher._resumeCreate] - resume message: ', requestMsg);

      //request create to the allocation system. Can be rejected by the PolicyEngine.
      _this._bus.postMessage(requestMsg, (reply) => {
        console.log('[syncher._resumeCreate] - create-resumed-response: ', reply);
        if (reply.body.code === 200) {

          let listOfReporters = reply.body.value;

          for (let index in listOfReporters) {

            let dataObject = listOfReporters[index];

            //reporter creation accepted

            // initialData.childrens = deepClone(dataObject.childrens) || {};
            // initialData = deepClone(dataObject.data) || {};
            dataObject.data = deepClone(dataObject.data) || {};
            dataObject.childrens = deepClone(dataObject.childrens) || {};
            dataObject.mutual = false;
            dataObject.resumed = true;

            console.log('[syncher._resumeCreate] - create-resumed-dataObjectReporter', dataObject);

            let newObj = new DataObjectReporter(dataObject);
            newObj.resumeChildrens(dataObject.childrens);
            _this._reporters[dataObject.url] = newObj;

          }

          resolve(_this._reporters);
          if (this._onReportersResume) this._onReportersResume(this._reporters);

        } else {
          //reporter creation rejected
          reject(reply.body.desc);
        }
      });
    });
  }

  _subscribe(input) {
    let _this = this;

    return new Promise((resolve, reject) => {

      //FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onLocalSubscribe
      let subscribeMsg = {
        type: 'subscribe', from: _this._owner, to: _this._subURL,
        body: {}
      };

      // Hyperty request to be an Observer
      // https://github.com/reTHINK-project/specs/blob/master/messages/data-sync-messages.md#hyperty-request-to-be-an-observer

      // Resume Subscriptions for the same Hyperty URL
      // https://github.com/reTHINK-project/specs/blob/master/messages/data-sync-messages.md#resume-subscriptions-for-the-same-hyperty-url

      // Resume Subscriptions for a certain user and data schema independently of the Hyperty URL.
      // https://github.com/reTHINK-project/specs/blob/master/messages/data-sync-messages.md#resume-subscriptions-for-a-certain-user-and-data-schema-independently-of-the-hyperty-url
      if (input) {
        if (input.hasOwnProperty('p2p')) subscribeMsg.body.p2p = input.p2p;
        if (input.hasOwnProperty('store')) subscribeMsg.body.store = input.store;
        if (input.hasOwnProperty('schema')) subscribeMsg.body.schema = input.schema;
        if (input.hasOwnProperty('identity')) subscribeMsg.body.identity = input.identity;
        if (input.hasOwnProperty('resource')) subscribeMsg.body.resource = input.resource;
      }

      subscribeMsg.body.resume = input.resume;

      //TODO: For Further Study
      //let mutualAuthentication = input.mutual;
      if (input.hasOwnProperty('mutual')) subscribeMsg.body.mutualAuthentication = input.mutual;

      console.log('[syncher_subscribe] - subscribe message: ', input, subscribeMsg);

      //request subscription
      //Provisional data is applied to the DataObjectObserver after confirmation. Or discarded if there is no confirmation.
      //for more info see the DataProvisional class documentation.
      _this._bus.postMessage(subscribeMsg, (reply) => {
        console.log('[syncher] - subscribe-response: ', reply);

        //let schema = reply.body.schema;
        let objURL = reply.body.resource;

        let newProvisional = _this._provisionals[objURL];
        delete _this._provisionals[objURL];
        if (newProvisional) newProvisional._releaseListeners();

        if (reply.body.code < 200) {
          console.log('[syncher] - new DataProvisional: ', reply.body.childrenResources, objURL);
          newProvisional = new DataProvisional(_this._owner, objURL, _this._bus, reply.body.childrenResources);
          _this._provisionals[objURL] = newProvisional;
        } else if (reply.body.code === 200) {
          console.log('[syncher] - new Data Object Observer: ', reply, _this._provisionals);

          let initialData = reply.body.value;
          if (!initialData.hasOwnProperty('childrens')) { initialData.childrens = {}; }
          if (!initialData.hasOwnProperty('data')) { initialData.data = {}; }

          //todo: take the full reply.body as input for the creation of DataObjectObserver

          let observerInput = reply.body.value;

          observerInput.syncher = _this;
          observerInput.status = 'on';
          observerInput.p2p = input.p2p;
          observerInput.store = input.store;
          observerInput.identity = input.identity;
          observerInput.resume = input.resume;

          // todo: For Further Study
          observerInput.mutual = input.mutual;
          observerInput.children = newProvisional.children;

          //TODO: mutualAuthentication For Further Study
          let newObj = new DataObjectObserver(observerInput);
          _this._observers[objURL] = newObj;

          resolve(newObj);
          newProvisional.apply(newObj);
        } else {
          reject(reply.body.desc);
        }
      });
    });
  }

  _resumeSubscribe(criteria) {
    let _this = this;

    return new Promise((resolve, reject) => {

      //FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onLocalSubscribe
      let subscribeMsg = {
        type: 'subscribe', from: _this._owner, to: _this._subURL,
        body: {}
      };

      // Hyperty request to be an Observer
      // https://github.com/reTHINK-project/specs/blob/master/messages/data-sync-messages.md#hyperty-request-to-be-an-observer

      // Resume Subscriptions for the same Hyperty URL
      // https://github.com/reTHINK-project/specs/blob/master/messages/data-sync-messages.md#resume-subscriptions-for-the-same-hyperty-url

      // Resume Subscriptions for a certain user and data schema independently of the Hyperty URL.
      // https://github.com/reTHINK-project/specs/blob/master/messages/data-sync-messages.md#resume-subscriptions-for-a-certain-user-and-data-schema-independently-of-the-hyperty-url
      if (criteria) {
        if (criteria.hasOwnProperty('p2p')) subscribeMsg.body.p2p = criteria.p2p;
        if (criteria.hasOwnProperty('store')) subscribeMsg.body.store = criteria.store;
        if (criteria.hasOwnProperty('schema')) subscribeMsg.body.schema = criteria.schema;
        if (criteria.hasOwnProperty('identity')) subscribeMsg.body.identity = criteria.identity;
        if (criteria.hasOwnProperty('resource')) subscribeMsg.body.resource = criteria.resource;
      }

      subscribeMsg.body.resume = criteria.resume;

      //TODO: For Further Study
      let mutualAuthentication = criteria.mutual;
      if (criteria.hasOwnProperty('mutual')) subscribeMsg.body.mutualAuthentication = mutualAuthentication;

      console.log('[syncher] - subscribe message: ', criteria, subscribeMsg);

      //request subscription
      //Provisional data is applied to the DataObjectObserver after confirmation. Or discarded if there is no confirmation.
      //for more info see the DataProvisional class documentation.
      _this._bus.postMessage(subscribeMsg, (reply) => {
        console.log('[syncher] - subscribe-resumed-response: ', reply);

        let objURL = reply.body.resource;

        let newProvisional = _this._provisionals[objURL];
        delete _this._provisionals[objURL];
        if (newProvisional) newProvisional._releaseListeners();

        if (reply.body.code < 200) { // todo: check if this is needed for the resume

          console.log('[syncher] - resume new DataProvisional: ', reply, objURL);
          newProvisional = new DataProvisional(_this._owner, objURL, _this._bus, reply.body.childrenResources);
          _this._provisionals[objURL] = newProvisional;

        } else if (reply.body.code === 200) {

          let listOfObservers = reply.body.value;

          for (let index in listOfObservers) {

            let dataObject = listOfObservers[index];
            console.log('[syncher] - Resume Object Observer: ', reply, dataObject, _this._provisionals);

            dataObject.childrens = deepClone(dataObject.childrens) || {};
            dataObject.data = deepClone(dataObject.data) || {};
            dataObject.resumed = true;

            //TODO: mutualAuthentication For Further Study
            console.log('[syncher._resumeSubscribe] - create new dataObject: ', dataObject);
            let newObj = new DataObjectObserver(dataObject);

            _this._observers[objURL] = newObj;

            _this._provisionals[objURL].apply(newObj);
          }

          resolve(_this._observers);

          if (this._onObserversResume) this._onObserversResume(_this._observers);

        } else {
          reject(reply.body.desc);
        }
      });
    });

  }

  //FLOW-IN: message received from a local runtime ReporterObject -> _onRemoteSubscribe
  _onForward(msg) {
    let _this = this;

    let reporter = _this._reporters[msg.body.to];
    reporter._onForward(msg);
  }

  //FLOW-IN: message received from a remote Syncher -> create (this is actually an invitation to subscribe)
  _onRemoteCreate(msg) {
    let _this = this;

   //remove "/subscription" from the URL
    let resource = msg.from.slice(0, -13);

    let event = {
      type: msg.type,
      from: msg.body.source,
      url: resource,
      schema: msg.body.schema,
      value: msg.body.value,
      identity: msg.body.identity,

      ack: (type) => {
        let lType = 200;
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
      console.info('[Syncher] NOTIFICATION-EVENT: ', event);
      _this._onNotificationHandler(event);
    }
  }

  //FLOW-IN: message received from a remote DataObjectReporter -> delete
  _onRemoteDelete(msg) {
    let _this = this;

   //remove "/subscription" from the URL
    let resource = msg.body.resource;

    let object = _this._observers[resource];
    if (object) {
      let event = {
        type: msg.type,
        url: resource,
        identity: msg.body.identity,

        ack: (type) => {
          let lType = 200;
          if (type) {
            lType = type;
          }

         //TODO: any other different options for the release process, like accept but nor release local?
          if (lType === 200) {
            object.delete();
          }

          //send ack response message
          _this._bus.postMessage({
            id: msg.id, type: 'response', from: msg.to, to: msg.from,
            body: { code: lType, source: _this._owner }
          });
        }
      };

      if (_this._onNotificationHandler) {
        console.log('NOTIFICATION-EVENT: ', event);
        _this._onNotificationHandler(event);
      }
    } else {
      _this._bus.postMessage({
        id: msg.id, type: 'response', from: msg.to, to: msg.from,
        body: { code: 404, source: _this._owner }
      });
    }
  }

  /**
  * Callback system to trigger the resumed reporters
  * @param  {Function} callback - function callback which will be invoked
  * @return {Object<URL, DataObjectReporter>} Return one object with all resumed reporters;
  */
  onReportersResume(callback) {
    this._onReportersResume = callback;
  }

  /**
  * Callback system to trigger the resumed observers
  * @param  {Function} callback - function callback which will be invoked
  * @return {Object<URL, DataObjectObserver>} Return one object with all resumed observers;
  */
  onObserversResume(callback) {
    this._onObserversResume = callback;
  }

}

export default Syncher;

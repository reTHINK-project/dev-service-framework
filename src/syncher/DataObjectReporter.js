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

import DataObject from './DataObject';

import DataObjectChild from './DataObjectChild';

import { deepClone } from '../utils/utils.js';

/**
 * The class returned from the Syncher create call.
 * To be used as a reporter point, changes will be submited to DataObjectObserver instances.
 */
class DataObjectReporter extends DataObject /* implements SyncStatus */ {
  /* private
  _subscriptions: <hypertyUrl: { status: string } }>

  ----event handlers----
  _onSubscriptionHandler: (event) => void
  _onResponseHandler: (event) => void
  _onReadHandler: (event) => void
  */

  /**
   * @ignore
   * Should not be used directly by Hyperties. It's called by the Syncher.create method
   */

   //constructor(syncher, url, created, reporter, runtime, schema, name, initialStatus, initialData, childrens, mutual = true, resumed = false, description, tags, resources, observerStorage, publicObservation) {
  constructor(input) {

    super(input);
    let _this = this;

    _this._subscriptions = {};

    _this._syncObj.observe((event) => {
      console.log('[Syncher.DataObjectReporter] ' + _this.url + ' publish change: ', event);
      _this._onChange(event);
    });

    _this._allocateListeners();
  }

  _allocateListeners() {
    super._allocateListeners();
    let _this = this;

    _this._objectListener = _this._bus.addListener(_this._url, (msg) => {
      console.log('DataObject-' + _this._url + '-RCV: ', msg);
      switch (msg.type) {
        case 'response': _this._onResponse(msg); break;
        case 'read': _this._onRead(msg); break;
      }
    });
  }

  _releaseListeners() {
    super._releaseListeners();
    let _this = this;

    _this._objectListener.remove();
  }

  /**
   * Send invitations (create messages) to hyperties, observers list.
   * @param  {HypertyURL[]} observers List of Hyperty URL's
   */
  inviteObservers(observers) {
    let _this = this;

    //FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onCreate
    // TODO: remove value and add resources? should similar to 1st create
    let inviteMsg = {
      type: 'create', from: _this._syncher._owner, to: _this._syncher._subURL,
      body: { resume: false, resource: _this._url, schema: _this._schema, value: _this._metadata, authorise: observers }
    };

    _this._bus.postMessage(inviteMsg);
  }

  /**
   * Release and delete object data
   */
  delete() {
    let _this = this;

    //FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onDelete
    let deleteMsg = {
      type: 'delete', from: _this._owner, to: _this._syncher._subURL,
      body: { resource: _this._url }
    };

    _this._bus.postMessage(deleteMsg, (reply) => {
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
  get subscriptions() { return this._subscriptions; }

  /**
   * Setup the callback to process subscribe and unsubscribe notifications
   * @param {function(event: MsgEvent)} callback function to receive events
   */
  onSubscription(callback) {
    this._onSubscriptionHandler = callback;
  }

  /**
   * Setup the callback to process response notifications of the create's
   * @param {function(event: MsgEvent)} callback function to receive events
   */
  onResponse(callback) {
    this._onResponseHandler = callback;
  }

  /**
   * Setup the callback to process read notifications
   * @param {function(event: MsgEvent)} callback
   */
  onRead(callback) {
    this._onReadHandler = callback;
  }

  //FLOW-IN: message received from parent Syncher -> _onForward
  _onForward(msg) {
    let _this = this;

    console.log('DataObjectReporter-RCV: ', msg);
    switch (msg.body.type) {
      case 'subscribe': _this._onSubscribe(msg); break;
      case 'unsubscribe': _this._onUnSubscribe(msg); break;
    }
  }

  //FLOW-IN: message received from this -> _onForward: emitted by a remote Syncher -> subscribe
  _onSubscribe(msg) {
    let _this = this;
    let hypertyUrl = msg.body.from;
    console.log('[DataObjectReporter._onSubscribe]', msg);

    let event = {
      type: msg.body.type,
      url: hypertyUrl,

      identity: msg.body.identity,

      accept: () => {
        //create new subscription
        let sub = { url: hypertyUrl, status: 'live' };
        _this._subscriptions[hypertyUrl] = sub;

        let msgValue = _this._metadata;
        msgValue.data = deepClone(_this.data);
        msgValue.version = _this._version;

        //process and send childrens data
        let childrenValues = {};

        if (_this._childrenObjects) {
          Object.keys(_this._childrenObjects).forEach((childrenId) => {
            let childrenData = _this._childrenObjects[childrenId].data;
            childrenValues[childrenId] = deepClone(childrenData);
          });
          msgValue.childrenObjects = childrenValues;
        }

        let sendMsg = {
          id: msg.id, type: 'response', from: msg.to, to: msg.from,
          body: { code: 200, schema: _this._schema, value: msgValue }
        };

        //TODO: For Further Study
        if (msg.body.hasOwnProperty('mutualAuthentication') && !msg.body.mutualAuthentication) {
          sendMsg.body.mutualAuthentication = this._mutualAuthentication;
          this._mutualAuthentication = msg.body.mutualAuthentication;
        }

        //send ok response message
        _this._bus.postMessage(sendMsg);

        return sub;
      },

      reject: (reason) => {
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

  //FLOW-IN: message received from this -> _onForward: emitted by a remote DataObjectObserver -> unsubscribe
  _onUnSubscribe(msg) {
    let _this = this;
    let hypertyUrl = msg.body.from;

    let sub = _this._subscriptions[hypertyUrl];
    delete _this._subscriptions[hypertyUrl];

    let event = {
      type: msg.body.type,
      url: hypertyUrl,
      object: sub
    };

    if (_this._onSubscriptionHandler) {
      console.log('UN-SUBSCRIPTION-EVENT: ', event);
      _this._onSubscriptionHandler(event);
    }
  }

  //FLOW-IN: message received from ReporterURL address: emited by a remote Syncher -> _onRemoteCreate -> event.ack
  _onResponse(msg) {
    let _this = this;

    let event = {
      type: msg.type,
      url: msg.from,
      code: msg.body.code
    };

    if (_this._onResponseHandler) {
      console.log('RESPONSE-EVENT: ', event);
      _this._onResponseHandler(event);
    }
  }

  //FLOW-IN: message received from ReporterURL address: emited by a remote Syncher -> read
  _onRead(msg) {
    let _this = this;
    let objectValue = deepClone(_this.metadata);
    objectValue.data = deepClone(_this.data);
    objectValue.version = _this._version;

    let response = {
      id: msg.id, type: 'response', from: msg.to, to: msg.from,
      body: { code: 200, value: objectValue }
    };

    let event = {
      type: msg.type,
      url: msg.from,

      accept: () => {
        _this._bus.postMessage(response);
      },

      reject: (reason) => {
        _this._bus.postMessage({
          id: msg.id, type: 'response', from: msg.to, to: msg.from,
          body: { code: 401, desc: reason }
        });
      }
    };

    // if the requester is an authorised observer, the data object is responded otherwise an event is triggered

    if (_this._subscriptions[msg.from]) {
      _this._bus.postMessage(response);
    } else if (_this._onReadHandler) {
      console.log('READ-EVENT: ', event);
      _this._onReadHandler(event);
    }
  }

}

export default DataObjectReporter;

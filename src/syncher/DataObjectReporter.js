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

import { deepClone, divideURL } from '../utils/utils.js';

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

    _this._invitations = [];
    _this.invitations = []; // array of promises with pending invitations
  }

  _allocateListeners() {
    super._allocateListeners();
    let _this = this;

    _this._objectListener = _this._bus.addListener(_this._url, (msg) => {
      console.log('[Syncher.DataObjectReporter] listener ' + _this._url + ' Received: ', msg);
      switch (msg.type) {
        case 'response': _this._onResponse(msg); break;
        case 'read': _this._onRead(msg); break;
        case 'execute': _this._onExecute(msg); break;
        case 'create': _this._onChildCreate(msg); break;// to create child objects that were sent whenn offline
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
  inviteObservers(observers, p2p) {
    let _this = this;


    //FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onCreate
    // TODO: remove value and add resources? should similar to 1st create

    let toInvite = observers;
    let invitePromises = [];

    /*  observers.forEach((observer)=> {
      if (!_this._invitations[observer]) {
        toInvite.push(observer);
        _this._invitations[observer] = observer;
      }
    });*/


    if (toInvite.length > 0) {
      console.log('[Syncher.DataObjectReporter] InviteObservers ', toInvite, _this._metadata);

      toInvite.forEach((observer)=>{

        let invitation = new Promise((resolve, reject) => {

          let inviteMsg = {
            type: 'create', from: _this._syncher._owner, to: _this._syncher._subURL,
            body: { resume: false, resource: _this._url, schema: _this._schema, value: _this._metadata, authorise: [observer] }
          };

          if (p2p) inviteMsg.body.p2p = p2p;

          _this._bus.postMessage(inviteMsg, (reply)=>{
            console.log('[Syncher.DataObjectReporter] Invitation reply ', reply);

              let result = {
                invited: observer,
                code: reply.body && reply.body.code ? reply.body.code : 500,
                desc: reply.body && reply.body.desc ? reply.body.desc : 'Unknown'
              };

            if (result.code < 300) resolve(result);
            else if (result.code >= 300) reject(result);
          });
        });

        _this.invitations.push(invitation);

      });

//      return(invitePromises);

    }
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

        //_this._syncObj.unobserve();
        _this._syncObj = {};
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

  /**
   * Setup the callback to process execute notifications
   * @param {function(event: MsgEvent)} callback
   */

  onExecute(callback) {
    this._onExecuteHandler = callback;
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
    let dividedURL = divideURL(hypertyUrl);
    let domain = dividedURL.domain;

    console.log('[DataObjectReporter._onSubscribe]', msg, domain, dividedURL);

    let event = {
      type: msg.body.type,
      url: hypertyUrl,

      domain: domain,

      identity: msg.body.identity,

      accept: () => {
        //create new subscription
        let sub = { url: hypertyUrl, status: 'live' };
        _this._subscriptions[hypertyUrl] = sub;
        if (_this.metadata.subscriptions) { _this.metadata.subscriptions.push(sub.url); }

        let msgValue = _this._metadata;
        msgValue.data = deepClone(_this.data);
        msgValue.version = _this._version;

        //process and send childrens data
        // let childrenValues = {};
        //
        // if (_this._childrenObjects) {
        //   Object.keys(_this._childrenObjects).forEach((childrenId) => {
        //     let childrenData = _this._childrenObjects[childrenId];
        //     childrenValues[childrenId] = deepClone(childrenData);
        //   });
        //   msgValue.childrenObjects = childrenValues;
        // }

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
    let dividedURL = divideURL(hypertyUrl);
    let domain = dividedURL.domain;

    console.log('[DataObjectReporter._onUnSubscribe]', msg, domain, dividedURL);

    //let sub = _this._subscriptions[hypertyUrl];
    delete _this._subscriptions[hypertyUrl];
    delete _this._invitations[hypertyUrl];

    let event = {
      type: msg.body.type,
      url: hypertyUrl,
      domain: domain,
      identity: msg.body.identity
    };

    // TODO: check if the _onSubscriptionHandler it is the same of the subscriptions???
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

    if (_this._childrenObjects) {
      objectValue.childrenObjects = {};
      let children;

      for (children in _this._childrenObjects) {
        let child;
        objectValue.childrenObjects[children] = {};
        for (child in _this._childrenObjects[children]) {
          objectValue.childrenObjects[children][child] = {};
          objectValue.childrenObjects[children][child].value = _this._childrenObjects[children][child].metadata;
          objectValue.childrenObjects[children][child].identity = _this._childrenObjects[children][child].identity;
        }
      }

    }

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
    let subscriptions = [];

    if (_this.metadata.subscriptions) {
      subscriptions = _this.metadata.subscriptions;
    } else if (_this._subscriptions) {
      subscriptions = Object.keys(_this._subscriptions).map(function(key) { return _this._subscriptions[key].url; });
    }

    if (subscriptions.indexOf(msg.from) != -1) {
      _this._bus.postMessage(response);
    } else if (_this._onReadHandler) {
      console.log('READ-EVENT: ', event);
      _this._onReadHandler(event);
    }
  }

  // Execute request received
  _onExecute(msg) {
    let _this = this;

    if (!msg.body.method) throw '[DataObjectReporter._onExecute] method missing ', msg;

    let response = {
      id: msg.id, type: 'response', from: msg.to, to: msg.from,
      body: { code: 200 }
    };

    let event = {
      type: msg.type,
      url: msg.from,
      method: msg.body.method,
      params: msg.body.params,

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

    if (_this._onExecuteHandler) {
      console.log('[DataObjectReporter] EXECUTE-EVENT: ', event);
      _this._onExecuteHandler(event);
    }
  }

}

export default DataObjectReporter;

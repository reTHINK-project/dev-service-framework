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
  */

  /**
   * @ignore
   * Should not be used directly by Hyperties. It's called by the Syncher.create method
   */
  constructor(syncher, url, schema, initialStatus, initialData, children) {
    super(syncher, url, schema, initialStatus, initialData, children);
    let _this = this;

    _this._bus.addListener(url, (msg) => {
      if (msg.type === 'response') {
        _this._onResponse(msg);
      }
    });

    _this._syncObj.observe((event) => {
      console.log('DataObjectReporter-' + url + '-SEND: ', event);
      _this._onChange(event);
    });

    _this._subscriptions = {};
  }

  /**
   * Subscriptions requested and accepted to this reporter
   * @type {Object<HypertyURL, SyncSubscription>}
   */
  get subscriptions() { return this._subscriptions; }

  /**
   * Setup the callback to process subscribe and unsubscribe notifications
   * @param {function(event: MsgEvent)} callback
   */
  onSubscription(callback) {
    this._onSubscriptionHandler = callback;
  }

  /**
   * Setup the callback to process response notifications of the create's
   * @param {function(event: MsgEvent)} callback
   */
  onResponse(callback) {
    this._onResponseHandler = callback;
  }

  _onForward(msg) {
    let _this = this;

    console.log('DataObjectReporter-RCV: ', msg);
    switch (msg.body.type) {
      case 'subscribe': _this._onSubscribe(msg); break;
      case 'unsubscribe': _this._onUnSubscribe(msg); break;
    }
  }

  _onSubscribe(msg) {
    let _this = this;
    let hypertyUrl = msg.body.from;

    let event = {
      type: msg.body.type,
      url: hypertyUrl,

      accept: () => {
        //create new subscription
        let sub = { url: hypertyUrl, status: 'on' };
        _this._subscriptions[hypertyUrl] = sub;

        //send ok response message
        _this._bus.postMessage({
          id: msg.id, type: 'response', from: msg.to, to: msg.from,
          body: { code: 200, schema: _this._schema, version: _this._version, value: deepClone(_this.data) }
        });

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

}

export default DataObjectReporter;

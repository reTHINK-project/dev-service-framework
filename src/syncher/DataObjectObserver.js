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
import DataObject from './DataObject';

let FilterType = {ANY: 'any', START: 'start', EXACT: 'exact'};

/**
 * The class returned from the Syncher subscribe call.
 * To be used as an observation point from a DataObjectReporter change.
 */
class DataObjectObserver extends DataObject /* implements SyncStatus */ {
  /* private
  _changeListener: MsgListener

  ----event handlers----
  _filters: {<filter>: {type: <start, exact>, callback: <function>} }
  */

  /**
   * @ignore
   * Should not be used directly by Hyperties. It's called by the Syncher.subscribe method
   */

  //TODO: For Further Study
  constructor(input) {
    //todo: check why
    //input.initialData = input.initialData.data;

    super(input);

    let _this = this;

    _this._version = input.version;
    _this._filters = {};

    _this._syncObj.observe((event) => {
      _this._onFilter(event);
    });


    _this._allocateListeners();
  }

  /**
   * Sync Data Object Observer with last version of Data Object Reporter. Useful for Resumes
   */
  sync() {

    let _this = this;
    console.info('[DataObjectObserver_sync] synchronising ');

    _this._syncher.read(_this._metadata.url).then((value)=>{
      console.info('[DataObjectObserver_sync] value to sync: ', value);

      if (value.version != _this._version) {
        console.info('[DataObjectObserver_sync] updating existing data: ', _this.data);

        Object.assign(_this.data || {}, deepClone(value.data));

        _this._metadata = deepClone(value);

        delete _this._metadata.data;

        _this._version = value.version;

      } else {
        console.info('[DataObjectObserver_sync] existing data updated: ', value);
      }

    }).catch((reason) => {
      console.info('[DataObjectObserver_sync] sync failed: ', reason);
    });

  }

  _allocateListeners() {
    super._allocateListeners();
    let _this = this;

    _this._changeListener = _this._bus.addListener(_this._url + '/changes', (msg) => {
      if (msg.type === 'update') {
        console.log('DataObjectObserver-' + _this._url + '-RCV: ', msg);
        _this._changeObject(_this._syncObj, msg);
      }
    });
  }

  _releaseListeners() {
    super._releaseListeners();
    let _this = this;

    _this._changeListener.remove();
  }

  /**
   * Release and delete object data
   */
  delete() {
    let _this = this;

    _this._releaseListeners();
    delete _this._syncher._observers[_this._url];
  }

  /**
   * Release and delete object data
   */
  unsubscribe() {
    let _this = this;

    //FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onLocalUnSubscribe
    let unSubscribeMsg = {
      type: 'unsubscribe', from: _this._owner, to: _this._syncher._subURL,
      body: { resource: _this._url }
    };

    _this._bus.postMessage(unSubscribeMsg, (reply) => {
      console.log('DataObjectObserver-UNSUBSCRIBE: ', reply);
      if (reply.body.code === 200) {
        _this._releaseListeners();
        delete _this._syncher._observers[_this._url];
      }
    });
  }

  /**
   * Register the change listeners sent by the reporter
   * @param {string} filter - Filter that identifies the field (separated dot path). Accepts * at the end for a more unrestricted filtering.
   * @param {function(event: MsgEvent)} callback
   */
  onChange(filter, callback) {
    let key = filter;
    let filterObj = {
      type: FilterType.EXACT,
      callback: callback
    };

    let idx = filter.indexOf('*');
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

  _onFilter(event) {
    let _this = this;

    Object.keys(_this._filters).forEach((key) => {
      let filter = _this._filters[key];
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

  onDisconnected(callback) {

    return new Promise((resolve, reject) => {

      this._subscribeRegistration()
      .then(() => {
        this._onDisconnected = callback;
        resolve();
      })
      .catch((err) => reject(err));
    });
  }

  _subscribeRegistration() {

    const msg = {
      type: 'subscribe',
      from: this._owner,
      to: this._syncher._runtimeUrl + '/subscriptions',
      body: {
        resources: [this._url + '/registration']
      }
    };

    return new Promise((resolve, reject) => {

      this._bus.postMessage(msg, (reply) => {
        console.log(`[DataObjectObserver._subscribeRegistration] ${this._url} rcved reply `, reply);

        if (reply.body.code === 200) {
          this._generateListener(this._url + '/registration');
          resolve();
        } else {
          console.error('Error subscribing registration status for ', this._url);
          reject('Error subscribing registration status for ' + this._url);
        }
      });
    });
  }

  _generateListener(notificationURL) {
    let _this = this;

    _this._bus.addListener(notificationURL, (msg) => {
      console.log(`[DataObjectObserver.registrationNotification] ${_this._url}: `, msg);
      if (msg.body.value && msg.body.value === 'disconnected' && _this._onDisconnected) {
        console.log(`[DataObjectObserver] ${_this._url}: was disconnected `, msg);
        _this._onDisconnected();
      }

    });
  }
}

export default DataObjectObserver;

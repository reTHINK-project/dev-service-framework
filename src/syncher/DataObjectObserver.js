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
  constructor(syncher, url, schema, initialStatus, initialData, childrens, initialVersion) {
    super(syncher, url, schema, initialStatus, initialData.data, childrens);
    let _this = this;

    _this._version = initialVersion;
    _this._filters = {};

    _this._syncObj.observe((event) => {
      _this._onFilter(event);
    });

    //setup childrens data from subscription
    Object.keys(initialData.childrens).forEach((childId) => {
      let childData = initialData.childrens[childId];
      _this._childrenObjects[childId] = new DataObjectChild(_this, childId, childData);
    });

    _this._allocateListeners();
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
   * @param {string} filter - Filter that identifies the field (separeted dot path). Accepts * at the end for a more unrestricted filtering.
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
}

export default DataObjectObserver;

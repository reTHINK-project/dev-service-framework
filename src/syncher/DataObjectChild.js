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

import SyncObject from './ProxyObject';

//import { deepClone } from '../utils/utils.js';

/**
 * The class returned from the DataObject addChildren call or from onAddChildren if remotely created.
 */
class DataObjectChild /* implements SyncStatus */ {
  /* private

  ----event handlers----
  _onResponseHandler: (event) => void
  */

  /**
   * @ignore
   * Should not be used directly by Hyperties. It's called by the DataObject.addChild
   */
  constructor(input) {
    let _this = this;

    function throwMandatoryParmMissingError(par) {
      throw '[DataObjectChild] ' + par + ' mandatory parameter is missing';
    }

    input.parent ?  _this._parent = input.parent : throwMandatoryParmMissingError('parent');
    input.url ?  _this._url = input.url : throwMandatoryParmMissingError('url');
    input.created ? _this._created = input.created : throwMandatoryParmMissingError('created');
    input.reporter ? _this._reporter = input.reporter : throwMandatoryParmMissingError('reporter');
    input.runtime ? _this._runtime = input.runtime : throwMandatoryParmMissingError('runtime');
    input.schema ? _this._schema = input.schema : throwMandatoryParmMissingError('schema');
    input.parentObject ? _this._parentObject = input.parentObject : throwMandatoryParmMissingError('parentObject');

    if (input.name) _this._name = input.name;
    if (input.description) _this._description = input.description;
    if (input.tags) _this._tags = input.tags;
    if (input.resources) _this._resources = input.resources;
    if (input.observerStorage) _this._observerStorage = input.observerStorage;
    if (input.publicObservation) _this._publicObservation = input.publicObservation;

    if (input.data) {
      _this._syncObj = new SyncObject(input.data);
    } else {
      _this._syncObj = new SyncObject({});
    }

    console.log('[DataObjectChild -  Constructor] - ', _this._syncObj);

    _this._bus = _this._parentObject._bus;
    _this._owner = _this._parentObject._owner;

    _this._allocateListeners();

    _this._metadata = input;

    // delete _this._metadata.data;
    delete _this._metadata.parentObject;

  }

  _allocateListeners() {
    let _this = this;

    //this is only needed for children reporters
    if (_this._reporter === _this._owner) {
      _this._listener = _this._bus.addListener(_this._reporter, (msg) => {
        if (msg.type === 'response' && msg.id === _this._msgId) {
          console.log('DataObjectChild.onResponse:', msg);
          _this._onResponse(msg);
        }
      });
    }
  }

  _releaseListeners() {
    let _this = this;

    if (_this._listener) {
      _this._listener.remove();
    }
  }

  /**
   * Release and delete object data
   */
  delete() {
    let _this = this;


    _this._releaseListeners();

    //TODO: send delete message ?
  }

  /**
   * All Metadata about the Child Data Object
   * @type {Object} -
   */
  get metadata() { return this._metadata; }

  /**
   * Children ID generated on addChildren. Unique identifier
   * @type {URL} - URL of the format <HypertyURL>#<numeric-sequence>
   */
  get childId() { return this._childId; }

  /**
   * Data Structure to be synchronized.
   * @type {JSON} - JSON structure that should follow the defined schema, if any.
   */
  get data() { return this._syncObj.data; }

  /**
   * Set for this dataObjectChild an identity
   * @method identity
   * @param  {Identity} identity identity from who created the message
   */
  set identity(identity) { this._identity = identity; }

  /**
   * Get for this dataObjectChild an identity
   * @method identity
   * @return {Identity} identity from who created the message
   */
  get identity() { return this._identity; }

  /**
   * Register the change listeners sent by the reporter child
   * @param {function(event: MsgEvent)} callback
   */
  onChange(callback) {
    this._syncObj.observe((event) => {
      console.log('[DataObjectChild - observer] - ', event);
      callback(event);
    });
  }

  /**
   * Setup the callback to process response notifications of the creates
   * @param {function(event: MsgEvent)} callback
   */
  onResponse(callback) {
    this._onResponseHandler = callback;
  }

  //FLOW-IN: message received from a remote DataObject -> _onChildCreate
  _onResponse(msg) {
    let _this = this;

    let event = {
      type: msg.type,
      url: msg.body.source,
      code: msg.body.code
    };

    if (_this._onResponseHandler) {
      _this._onResponseHandler(event);
    }
  }

}

export default DataObjectChild;

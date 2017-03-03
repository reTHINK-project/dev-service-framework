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

import SyncObject, {ChangeType, ObjectType} from './ProxyObject';
import DataObjectChild from './DataObjectChild';
import {deepClone} from '../utils/utils.js';

/**
 * Main extension class for observers and reporters, with common properties and methods.
 * Children management is common for observers and reporters.
 */
class DataObject {
  /* private
  _version: number

  _owner: HypertyURL
  _url: ObjectURL
  _schema: Schema
  _bus: MiniBus
  _status: on | paused
  _syncObj: SyncData

  _children: { id: DataObjectChild }
  _childrenListeners: [MsgListener]

  ----event handlers----
  _onAddChildHandler: (event) => void
  */

  /**
   * @ignore
   * Should not be used directly by Hyperties. It's called by the Syncher create or subscribe method's
   */
  constructor(syncher, url, schema, initialStatus, initialData, childrens, mutual = true) {
    let _this = this;

    _this._syncher = syncher;
    _this._url = url;
    _this._schema = schema;
    _this._status = initialStatus;
    _this._syncObj = new SyncObject(initialData);
    _this._childrens = childrens;

    //TODO: For Further Study
    _this._mutualAuthentication = mutual;

    _this._version = 0;
    _this._childId = 0;
    _this._childrenObjects = {};
    _this._childrenListeners = [];

    _this._owner = syncher._owner;
    _this._bus = syncher._bus;
  }

  _allocateListeners() {
    let _this = this;

    let childBaseURL = _this._url + '/children/';
    console.log('[Data Object - AllocateListeners] - ', _this._childrens);
    if (_this._childrens) {
      _this._childrens.forEach((child) => {
        let childURL = childBaseURL + child;
        let listener = _this._bus.addListener(childURL, (msg) => {
          //ignore msg sent by himself
          if (msg.from !== this._owner) {
            console.log('DataObject-Children-RCV: ', msg);
            switch (msg.type) {
              case 'create': _this._onChildCreate(msg); break;
              case 'delete': console.log(msg); break;
              default: _this._changeChildren(msg); break;
            }
          }
        });

        _this._childrenListeners.push(listener);
      });
    }
  }

  _releaseListeners() {
    let _this = this;

    _this._childrenListeners.forEach((listener) => {
      listener.remove();
    });

    Object.keys(_this._childrenObjects).forEach((key) => {
      _this._childrenObjects[key]._releaseListeners();
    });
  }

  /**
   * Object URL of reporter or observer
   * @type {ObjectURL}
   */
  get url() { return this._url; }

  /**
   * Object schema URL (this field is not yet stable, and is subsject to change)
   * @type {SchemaURL}
   */
  get schema() { return this._schema; }

  /**
   * Status of the reporter or observer connection (this field is not yet stable, and is subsject to change)
   * @type {Status} - Enum of: on | paused
   */
  get status() { return this._status; }

  /**
   * Data structure to be synchronized.
   * @type {JSON} - JSON structure that should follow the defined schema, if any.
   */
  get data() { return this._syncObj.data; }

  /**
   * All created children's since the subscription, doesn't contain all children's since reporter creation.
   * @type {Object<ChildId, DataObjectChild>}
   */
  get childrens() { return this._childrenObjects; }

  /**
   * @ignore
   */
  pause() {
    //TODO: this feature needs more analise
    throw 'Not implemented';
  }

  /**
   * @ignore
   */
  resume() {
    //TODO: this feature needs more analise
    throw 'Not implemented';
  }

  /**
   * @ignore
   */
  stop() {
    //TODO: should remove the subscription and send message unsubscribe?
    throw 'Not implemented';
  }

  /**
   * Create and add a DataObjectChild to a children collection.
   * @param {String} children - Children name where the child is added.
   * @param {JSON} initialData - Initial data of the child
   * @param  {MessageBodyIdentity} identity - (optional) identity data to be added to identity the user reporter. To be used for legacy identities.
   * @return {Promise<DataObjectChild>} - Return Promise to a new DataObjectChild.
   */
  addChild(children, initialData, identity) {
    let _this = this;

    //create new child unique ID, based on hypertyURL
    _this._childId++;
    let msgChildId = _this._owner + '#' + _this._childId;
    let msgChildPath = _this._url + '/children/' + children;

    //FLOW-OUT: this message will be sent directly to a resource child address: MessageBus
    let requestMsg = {
      type: 'create', from: _this._owner, to: msgChildPath,
      body: { resource: msgChildId, value: initialData }
    };

    if (identity)      { requestMsg.body.identity = identity; }

    //TODO: For Further Study
    if (!_this._mutualAuthentication) requestMsg.body.mutualAuthentication = _this._mutualAuthentication;

    //returns promise, in the future, the API may change to asynchronous call
    return new Promise((resolve) => {
      let msgId = _this._bus.postMessage(requestMsg);

      console.log('create-reporter-child( ' + _this._owner + ' ): ', requestMsg);
      let newChild = new DataObjectChild(_this, msgChildId, initialData, _this._owner, msgId);
      newChild.onChange((event) => {
        _this._onChange(event, { path: msgChildPath, childId: msgChildId });
      });

      _this._childrenObjects[msgChildId] = newChild;

      resolve(newChild);
    });
  }

  /**
   * Setup the callback to process create and delete of childrens.
   * @param {function(event: MsgEvent)} callback
   */
  onAddChild(callback) {
    this._onAddChildrenHandler = callback;
  }

  //FLOW-IN: message received from a remote DataObject -> addChild
  _onChildCreate(msg) {
    let _this = this;
    let msgChildId = msg.body.resource;

    console.log('create-observer-child( ' + _this._owner + ' ): ', msg);
    let newChild = new DataObjectChild(_this, msgChildId, msg.body.value);
    _this._childrenObjects[msgChildId] = newChild;

    setTimeout(() => {
      //FLOW-OUT: will flow to DataObjectChild -> _onResponse
      _this._bus.postMessage({
        id: msg.id, type: 'response', from: msg.to, to: msg.from,
        body: { code: 200, source: _this._owner }
      });
    });

    let event = {
      type: msg.type,
      from: msg.from,
      url: msg.to,
      value: msg.body.value,
      childId: msgChildId,
      identity: msg.body.identity
    };

    if (_this._onAddChildrenHandler) {
      console.log('ADD-CHILDREN-EVENT: ', event);
      _this._onAddChildrenHandler(event);
    }
  }

  //send delta messages to subscriptions
  _onChange(event, childInfo) {
    let _this = this;

    _this._version++;

    if (_this._status === 'on') {
      //FLOW-OUT: this message will be sent directly to a resource changes address: MessageBus
      let changeMsg = {
        type: 'update', from: _this._url, to: _this._url + '/changes',
        body: { version: _this._version, source: _this._owner, attribute: event.field }
      };

      console.log('[DataObject - _onChange] - ', event, childInfo, changeMsg);

      if (event.oType === ObjectType.OBJECT) {
        if (event.cType !== ChangeType.REMOVE) {
          changeMsg.body.value = event.data;
        }
      } else {
        changeMsg.body.attributeType = event.oType;
        changeMsg.body.value = event.data;
        if (event.cType !== ChangeType.UPDATE) {
          changeMsg.body.operation = event.cType;
        }
      }

      //childInfo must have (path, childId)
      if (childInfo) {
        changeMsg.to = childInfo.path;
        changeMsg.body.resource = childInfo.childId;
      }

      //TODO: For Further Study
      if (!_this._mutualAuthentication) changeMsg.body.mutualAuthentication = _this._mutualAuthentication;

      _this._bus.postMessage(changeMsg);
    }
  }

  //FLOW-IN: delta message received from a remote DataObjectReporter or DataObjectChild when changing data
  _changeObject(syncObj, msg) {
    let _this = this;

    //TODO: update version ?
    //how to handle an incorrect version ? Example: receive a version 3 when the observer is in version 1, where is the version 2 ?
    //will we need to confirm the reception ?
    if (_this._version + 1 === msg.body.version) {
      _this._version++;
      let path = msg.body.attribute;
      let value = deepClone(msg.body.value);
      let findResult = syncObj.findBefore(path);

      if (msg.body.attributeType === ObjectType.ARRAY) {
        if (msg.body.operation === ChangeType.ADD) {
          let arr = findResult.obj;
          let index = findResult.last;
          Array.prototype.splice.apply(arr, [index, 0].concat(value));
        } else if (msg.body.operation === ChangeType.REMOVE) {
          let arr = findResult.obj;
          let index = findResult.last;
          arr.splice(index, value);
        } else {
          findResult.obj[findResult.last] = value; // UPDATE
        }
      } else {
        if (msg.body.value) {
          findResult.obj[findResult.last] = value; // UPDATE or ADD
        } else {
          delete findResult.obj[findResult.last]; // REMOVE
        }
      }
    } else {
      //TODO: how to handle unsynchronized versions?
      console.log('UNSYNCHRONIZED VERSION: (data => ' + _this._version + ', msg => ' + msg.body.version + ')');
    }
  }

  //FLOW-IN: message received from a remote DataObjectChild when changing data
  _changeChildren(msg) {
    let _this = this;
    console.log('Change children: ', _this._owner, msg);

    let childId = msg.body.resource;
    let children = _this._childrenObjects[childId];

    if (children) {
      _this._changeObject(children._syncObj, msg);
    } else {
      console.log('No children found for: ', childId);
    }
  }

}

export default DataObject;

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

import SyncObject from './SyncObject';
import DataObjectChild from './DataObjectChild';
import { ChangeType, ObjectType } from './SyncObject';
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

  ----event handlers----
  _onAddChildrenHandler: (event) => void
  */

  /**
   * @ignore
   * Should not be used directly by Hyperties. It's called by the Syncher create or subscribe method's
   */
  constructor(owner, url, schema, bus, initialStatus, initialData, children) {
    let _this = this;

    _this._version = 0;

    _this._owner = owner;
    _this._url = url;
    _this._schema = schema;
    _this._bus = bus;
    _this._status = initialStatus;
    _this._syncObj = new SyncObject(initialData);

    _this._childId = 0;
    _this._children = { };

    let childBaseURL = url + '/children/';

    if (children) {
      children.forEach((child) => {
        let childURL = childBaseURL + child;
        bus.addListener(childURL, (msg) => {
          //ignore msg sent by himself
          if (msg.from !== this._owner) {
            switch (msg.type) {
              case 'create': _this._onChildrenCreate(msg); break;
              case 'delete': console.log(msg); break;
              default: _this._changeChildren(msg); break;
            }
          }
        });
      });
    }
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
  get children() { return this._children; }

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
   * @ignore
   */
  release() {
    //TODO: remove all listeners for this object
  }

  /**
   * Create and add a children to the subscription group.
   * @param {String} resource - Resource name, one of the items in the schema.properties.scheme of the parent object.
   * @param {JSON} initialData - Initial data of the child
   * @return {Promise<DataObjectChild>} - Return Promise to a new Children.
   */
  addChildren(resource, initialData) {
    let _this = this;

    //create new child unique ID, based on hypertyURL
    _this._childId++;
    let msgChildId = _this._owner + '#' + _this._childId;
    let msgChildPath = _this._url + '/children/' + resource;

    let requestMsg = {
      type: 'create', from: _this._owner, to: msgChildPath,
      body: { resource: msgChildId, value: initialData }
    };

    //returns promise, in the future, the API may change to asynchronous call
    return new Promise((resolve) => {
      let msgId = _this._bus.postMessage(requestMsg);

      console.log('create-reporter-child( ' + _this._owner + ' ): ', requestMsg);
      let newChild = new DataObjectChild(_this._owner, msgChildId, msgId, _this._bus, initialData);
      newChild.onChange((event) => {
        _this._onChange(event, { path: msgChildPath, childId: msgChildId });
      });

      _this._children[msgChildId] = newChild;

      resolve(newChild);
    });
  }

  /**
   * Setup the callback to process create and delete childrens
   * @param {function(event: MsgEvent)} callback
   */
  onAddChildren(callback) {
    this._onAddChildrenHandler = callback;
  }

  _onChildrenCreate(msg) {
    let _this = this;
    let msgChildId = msg.body.resource;

    console.log('create-observer-child( ' + _this._owner + ' ): ', msg);
    let newChild = new DataObjectChild(msg.from, msgChildId, 0, _this._bus, msg.body.value);
    _this._children[msgChildId] = newChild;

    setTimeout(() => {
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
      childId: msgChildId
    };

    if (_this._onAddChildrenHandler) {
      _this._onAddChildrenHandler(event);
    }
  }

  //send delta messages to subscriptions
  _onChange(event, childInfo) {
    let _this = this;

    _this._version++;

    if (_this._status === 'on') {
      let changeMsg = {
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
  _changeObject(syncObj, msg) {
    let _this = this;

    //TODO: update version ?
    //how to handle an incorrect version ? Example: receive a version 3 when the observer is in version 1, where is the version 2 ?
    //will we need to confirm the reception ?
    if (_this._version + 1 === msg.body.version) {
      _this._version++;
      let path = msg.body.attrib;
      let value = deepClone(msg.body.value);
      let findResult = syncObj.findBefore(path);

      if (msg.type === ChangeType.UPDATE) {
        findResult.obj[findResult.last] = value;
      } else {
        if (msg.type === ChangeType.ADD) {
          if (msg.body.oType === ObjectType.OBJECT) {
            findResult.obj[findResult.last] = value;
          } else {
            //ARRAY
            let arr = findResult.obj;
            let index = findResult.last;
            Array.prototype.splice.apply(arr, [index, 0].concat(value));
          }
        } else {
          //REMOVE
          if (msg.body.oType === ObjectType.OBJECT) {
            delete findResult.obj[findResult.last];
          } else {
            //ARRAY
            let arr = findResult.obj;
            let index = findResult.last;
            arr.splice(index, value);
          }
        }
      }
    } else {
      //TODO: how to handle unsynchronized versions?
      console.log('UNSYNCHRONIZED VERSION: (data => ' + _this._version + ', msg => ' + msg.body.version + ')');
    }
  }

  _changeChildren(msg) {
    let _this = this;
    console.log('Change children: ', _this._owner, msg);

    let childId = msg.body.childId;
    let children = _this._children[childId];

    if (children) {
      _this._changeObject(children._syncObj, msg);
    } else {
      console.log('No children found for: ', childId);
    }
  }

}

export default DataObject;

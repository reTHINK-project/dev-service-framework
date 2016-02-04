import SyncObject from './SyncObject';
import DataObjectChild from './DataObjectChild';
import { ChangeType, ObjectType } from './SyncObject';

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

  get version() { return this._version; }

  get url() { return this._url; }

  get schema() { return this._schema; }

  get status() { return this._status; }

  get data() { return this._syncObj.data; }

  get children() { return this._children; }

  pause() {
    //TODO: this feature needs more analise
    throw 'Not implemented';
  }

  resume() {
    //TODO: this feature needs more analise
    throw 'Not implemented';
  }

  stop() {
    //TODO: should remove the subscription and send message unsubscribe?
    throw 'Not implemented';
  }

  release() {
    //TODO: remove all listeners for this object
  }

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
      let value = msg.body.value;
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
      console.log('unsynchronized versions');
    }
  }

  _changeChildren(msg) {
    let _this = this;
    console.log('Change children: ', _this._owner, msg);

    let childId = msg.body.childId;
    let children = _this._children[childId];

    if (children) {
      _this._changeObject(children, msg);
    } else {
      console.log('No children found for: ', childId);
    }
  }

}

export default DataObject;

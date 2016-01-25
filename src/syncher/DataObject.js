import SyncObject from './SyncObject';
import DataObjectChild from './DataObjectChild';

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
  */

  constructor(owner, url, schema, bus, initialStatus, initialData) {
    let _this = this;

    _this._version = 0;

    _this._owner = owner;
    _this._url = url;
    _this._schema = schema;
    _this._bus = bus;
    _this._status = initialStatus;
    _this._syncObj = new SyncObject(initialData);

    _this._childId = 0;
    _this._children = {};

    //get children from schema?
    let children = ['1', '2'];

    let childBaseURL = url + '/children/';
    children.forEach((child) => {
      let childURL = childBaseURL + child;
      bus.addListener(childURL, (msg) => {
        switch (msg.type) {
          case 'create': _this._onChildCreate(msg); break;
        }
      });
    });
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

  addChild(resource, initialData) {
    let _this = this;

    //create new child unique ID, based on hypertyURL
    _this._childId++;
    let msgChildId = _this._owner + '#' + _this._childId;

    let requestMsg = {
      type: 'create', from: _this._owner, to: _this._url + '/children/' + resource,
      body: { childId: msgChildId, value: initialData }
    };

    //returns promise, in the future, the API may change to asynchronous call
    return new Promise((resolve) => {
      let msgId = _this._bus.postMessage(requestMsg);

      //TODO: create DataObjectChild
      console.log('create-reporter-child( ' + _this._owner + ' ): ', requestMsg);
      let newChild = new DataObjectChild(_this._owner, msgChildId, msgId, _this._bus, initialData);
      _this._children[msgChildId] = newChild;

      resolve(newChild);
    });
  }

  onChild(callback) {

  }

  _onChildCreate(msg) {
    let _this = this;
    let msgChildId = msg.body.childId;

    //ignore create sent by himself
    if (msg.from !== this._owner) {
      //TODO: Process child creation
      //TODO: send event to onChild
      console.log('create-observer-child( ' + _this._owner + ' ): ', msg);
      let newChild = new DataObjectChild(msg.from, msgChildId, 0, _this._bus, msg.body.value);
      _this._children[msgChildId] = newChild;

      //TODO: fire onChild event !
    }
  }

}

export default DataObject;

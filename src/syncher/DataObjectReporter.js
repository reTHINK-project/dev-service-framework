import DataObject from './DataObject';
import {deepClone} from '../utils/utils.js';

class DataObjectReporter extends DataObject /* implements SyncStatus */ {
  /* private
  _subscriptions: <hypertyUrl: { status: string } }>

  ----event handlers----
  _onSubscriptionHandler: (event) => void
  _onResponseHandler: (event) => void
  */

  constructor(owner, url, schema, bus, initialStatus, initialData) {
    super(owner, url, schema, bus, initialStatus, initialData);
    let _this = this;

    bus.addListener(owner, (msg) => {
      if (msg.type === 'response' && msg.body.source === url) {
        _this._onResponse(msg);
      }
    });

    _this._syncObj.observe((event) => {
      _this._onChange(event);
    });

    _this._subscriptions = {};
  }

  get subscriptions() { return this._subscriptions; }

  onSubscription(callback) {
    this._onSubscriptionHandler = callback;
  }

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
        _this._subscriptions[hypertyUrl] = { status: 'on' };

        //send ok response message
        _this._bus.postMessage({
          id: msg.id, type: 'response', from: msg.to, to: msg.from,
          body: { code: 200, schema: _this._schema, version: _this._version, value: deepClone(_this.data) }
        });
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
      _this._onSubscriptionHandler(event);
    }
  }

  //send delta messages to subscriptions
  _onChange(event) {
    let _this = this;

    _this._version++;

    if (_this._status === 'on') {
      _this._bus.postMessage({
        type: event.cType, from: _this._owner, to: _this._url,
        body: {version: _this._version, oType: event.oType, attrib: event.field, value: event.data}
      });
    }
  }

  _onResponse(msg) {
    let _this = this;

    //TODO: process notification reponses!
    //TODO: process notification reponses!
    console.log('DataObjectReporter.onResponse:', msg);

    /*if (_this._onResponseHandler) {
      _this._onResponseHandler(event);
    }*/
  }

}

export default DataObjectReporter;

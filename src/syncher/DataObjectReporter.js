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
  constructor(owner, url, schema, bus, initialStatus, initialData, children) {
    super(owner, url, schema, bus, initialStatus, initialData, children);
    let _this = this;

    bus.addListener(owner, (msg) => {
      if (msg.type === 'response' && msg.body.source === url) {
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

  _onResponse(msg) {
    let _this = this;

    let event = {
      type: msg.type,
      url: msg.from,
      code: msg.body.code
    };

    if (_this._onResponseHandler) {
      _this._onResponseHandler(event);
    }
  }

}

export default DataObjectReporter;


class DataObjectChild /* implements SyncStatus */ {
  /* private

  ----event handlers----
  _onResponseHandler: (event) => void
  */

  constructor(owner, childId, msgId, bus, initialData) {
    let _this = this;

    _this._bus = bus;

    bus.addListener(owner, (msg) => {
      if (msg.type === 'response' && msg.id === msgId) {
        console.log('DataObjectChild.onResponse:', msg);
        _this._onResponse(msg);
      }
    });

  }

  onResponse(callback) {
    this._onResponseHandler = callback;
  }

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


class DataObjectChild /* implements SyncStatus */ {
  /* private

  ----event handlers----
  _onResponseHandler: (event) => void
  */

  constructor(owner, childId, msgId, bus, initialData) {
    let _this = this;

    _this._bus = bus;

    bus.addListener(owner, (msg) => {
      console.log('DataObjectChild: ', msg);
      if (msg.type === 'response' && msg.id === msgId) {
        _this._onResponse(msg);
      }
    });

  }

  onResponse(callback) {
    this._onResponseHandler = callback;
  }

  _onResponse(msg) {
    let _this = this;

    //TODO: process notification reponses!
    console.log('DataObjectChild.onResponse:', msg);

    /*if (_this._onResponseHandler) {
      _this._onResponseHandler(event);
    }*/
  }

}

export default DataObjectChild;

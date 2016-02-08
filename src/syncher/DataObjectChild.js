import SyncObject from './SyncObject';

class DataObjectChild /* implements SyncStatus */ {
  /* private

  ----event handlers----
  _onResponseHandler: (event) => void
  */

  /**
   * Should not be used directly by Hyperties. It's called by the DataObject.addChildren
   */
  constructor(owner, childId, msgId, bus, initialData) {
    let _this = this;

    _this._owner = owner;
    _this._childId = childId;
    _this._bus = bus;
    _this._syncObj = new SyncObject(initialData);

    bus.addListener(owner, (msg) => {
      if (msg.type === 'response' && msg.id === msgId) {
        console.log('DataObjectChild.onResponse:', msg);
        _this._onResponse(msg);
      }
    });

  }

  /**
   * Children ID generated on addChildren. Unique identifier
   * @return {URL} URL of the format <HypertyURL>#<numeric-sequence>
   */
  get childId() { return this._childId; }

  /**
   * Data Structure to be synchronized.
   * @return {JSON} JSON structure that should follow the defined schema, if any.
   */
  get data() { return this._syncObj.data; }

  /**
   * Register the change listeners sent by the reporter child
   * @param  {Function} callback Function of type (event) => void
   */
  onChange(callback) {
    this._syncObj.observe((event) => {
      callback(event);
    });
  }

  /**
   * Setup the callback to process response notifications of the creates
   * @param  {Function} callback Function of type (event) => void
   */
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

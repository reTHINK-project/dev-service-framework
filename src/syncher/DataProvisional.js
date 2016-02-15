/**
 * @access private
 */
class DataProvisional {
  /* private
  _childrenListeners: [MsgListener]
  _listener: MsgListener

  _changes: []
  */

  constructor(owner, url, bus, children) {
    let _this = this;

    _this._changes = [];
    _this._children = children;
    _this._childrenListeners = [];

    _this._listener = bus.addListener(url, (msg) => {
      console.log('DataProvisional-' + url + '-RCV: ', msg);
      _this._changes.push(msg);
    });

    /*if (children) {
      let childBaseURL = url + '/children/';
      children.forEach((child) => {
        let childURL = childBaseURL + child;
        let listener = bus.addListener(childURL, (msg) => {
          //ignore msg sent by himself
          if (msg.from !== owner) {
            console.log(msg);
          }
        });

        _this._childrenListeners.push(listener);
      });
    }*/

  }

  get children() { return this._children; }

  apply(observer) {
    let _this = this;
    _this._changes.forEach((change) => {
      observer._changeObject(observer._syncObj, change);
    });
  }

  release() {
    this._listener.remove();

    /*this._childrenListeners.forEach((listener) => {
      listener.remove();
    });*/
  }
}

export default DataProvisional;

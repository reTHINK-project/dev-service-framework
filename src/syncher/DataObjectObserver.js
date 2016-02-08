import DataObject from './DataObject';

let FilterType = {ANY: 'any', START: 'start', EXACT: 'exact'};

class DataObjectObserver extends DataObject /* implements SyncStatus */ {
  /* private

  ----event handlers----
  _filters: {<filter>: {type: <start, exact>, callback: <function>} }
  */

  /**
   * Should not be used directly by Hyperties. It's called by the Syncher.subscribe method
   */
  constructor(owner, url, schema, bus, initialStatus, initialData, children) {
    super(owner, url, schema, bus, initialStatus, initialData, children);
    let _this = this;

    //add listener for objURL
    bus.addListener(url, (msg) => {
      console.log('DataObjectObserver-' + url + '-RCV: ', msg);
      _this._changeObject(_this._syncObj, msg);
    });

    _this._syncObj.observe((event) => {
      _this._onFilter(event);
    });

    _this._filters = {};
  }

  /**
   * Register the change listeners sent by the reporter
   * @param  {String}   filter Filter that identifies the field (separeted dot path). it accepts * at the end for a more unrestricted filtering.
   * @param  {Function} callback Function of type (event) => void
   */
  onChange(filter, callback) {
    let key = filter;
    let filterObj = {
      type: FilterType.EXACT,
      callback: callback
    };

    let idx = filter.indexOf('*');
    if (idx === filter.length - 1) {
      if (idx === 0) {
        filterObj.type = FilterType.ANY;
      } else {
        filterObj.type = FilterType.START;
        key = filter.substr(0, filter.length - 1);
      }
    }

    this._filters[key] = filterObj;
  }

  _onFilter(event) {
    let _this = this;

    Object.keys(_this._filters).forEach((key) => {
      let filter = _this._filters[key];
      if (filter.type === FilterType.ANY) {
        //match anything
        filter.callback(event);
      } else if (filter.type === FilterType.START) {
        //if starts with filter...
        if (event.field.indexOf(key) === 0) {
          filter.callback(event);
        }
      } else if (filter.type === FilterType.EXACT) {
        //exact match
        if (event.field === key) {
          filter.callback(event);
        }
      }
    });
  }
}

export default DataObjectObserver;

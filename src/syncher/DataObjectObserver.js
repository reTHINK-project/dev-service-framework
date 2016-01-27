import DataObject from './DataObject';

let FilterType = {ANY: 'any', START: 'start', EXACT: 'exact'};

class DataObjectObserver extends DataObject /* implements SyncStatus */ {
  /* private

  ----event handlers----
  _filters: {<filter>: {type: <start, exact>, callback: <function>} }
  */

  constructor(owner, url, schema, bus, initialStatus, initialData) {
    super(owner, url, schema, bus, initialStatus, initialData);
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

  //register change filter
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

  //filter changes
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

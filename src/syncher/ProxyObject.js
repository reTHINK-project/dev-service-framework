import 'proxy-observe';

/**
 * @access private
 * Main class that maintains a JSON object, and observes changes in this object, recursively.
 * Internal objects and arrays are also observed.
 */
class SyncObject {

  constructor(initialData) {
    let _this = this;

    _this._observers = [];
    _this._filters = {};

    this._data = initialData || {};

    this._internalObserve(this._data);
  }

  get data() { return this._data; }

  observe(callback) {
    this._observers.push(callback);
  }

  find(path) {
    let list = path.split('.');

    return this._findWithSplit(list);
  }

  findBefore(path) {
    let result = {};
    let list = path.split('.');
    result.last = list.pop();
    result.obj = this._findWithSplit(list);

    return result;
  }

  _findWithSplit(list) {
    let obj = this._data;
    list.forEach((value) => {
      obj = obj[value];
    });

    return obj;
  }

  _isObservable(obj) {
    if (obj.constructor === Object || obj.constructor === Array) {
      return true;
    }

    return false;
  }


  _internalObserve(object) {

    let handler = (changeset) => {

      changeset.forEach((change) => {
        if (change.newValue && change.newValue instanceof Object) {
          if (change.newValue instanceof Object) {
            let o = Object.deepObserve(change.newValue, handler);
            object[change.keypath] = o;
          }

          if (change.newValue instanceof Array) {
            let o = Array.observe(change.newValue, handler);
            object[change.keypath] = o;
          }
        }
      });

      changeset.every((change) => {
        this._onChanges(change);
      });

    };

    this._data = Object.deepObserve(object, handler);

  }

  _fireEvent(event) {
    this._observers.forEach((callback) => {
      callback(event);
    });
  }

  _onChanges(change) {

    let obj = change.object;
    let objType;

    if (obj.constructor === Object) {
      objType = ObjectType.OBJECT;
    }

    if (obj.constructor === Array) {
      objType = ObjectType.ARRAY;
    }

    let fieldString = change.keypath;

    // console.log('Field:', fieldString);
    // console.log('type:', change.type);

    //let oldValue = change.oldValue;
    let newValue = obj[change.name];

    console.info(change.type + ' | Field: ' + fieldString + ' | New Value:', JSON.stringify(newValue));

    if (change.type === 'update') {
      this._fireEvent({
        cType: ChangeType.UPDATE,
        oType: objType,
        field: fieldString,
        data: newValue
      });
    }

    if (change.type === 'add') {
      this._fireEvent({
        cType: ChangeType.ADD,
        oType: objType,
        field: fieldString,
        data: newValue
      });
    }

    if (change.type === 'delete') {
      this._fireEvent({
        cType: ChangeType.REMOVE,
        oType: objType,
        field: fieldString
      });
    }
  }

}

export let ChangeType = {UPDATE: 'update', ADD: 'add', REMOVE: 'remove'};
export let ObjectType = {OBJECT: 'object', ARRAY: 'array'};
export default SyncObject;

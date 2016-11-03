class StorageManager {

  constructor(db, storageName, version = 1) {
    if (!db) throw Error('The Storage Manager needs the database instance');
    if (!storageName) throw Error('The Storage Manager needs the storage name');

    let stores =  {};
    stores[storageName] = 'key,version,value';

    db.version(version).stores(stores);
    db.open().then((db) => {
      console.info('Found database name ' + db.name + ' with version no: ' + db.verno);

      // db.tables.forEach((table) => {
      //   console.log('Found table: ' + table.name);
      //   console.log('Table Schema: ' + JSON.stringify(table.schema, null, 4));
      // });

    }).catch(console.error);

    this.db = db;
    this.storageName = storageName;
  }

  _checkKey(key) {
    if (typeof key !== 'string') return key.toString();
    return key;
  }

  set(key, version, value) {
    console.info('[StorageManager] - set ', key);

    return this.db[this.storageName].put({key: this._checkKey(key), version:version, value:value});
  }

  get(key) {
    console.info('[StorageManager] - get ', key);
    return this.db[this.storageName].where('key')
      .equals(this._checkKey(key))
      .first()
      .then(object => {
        if (object) return object.value;
      })
      .catch(error => {
        console.info('error getting the key ', key, ' with error: ', error);
        return undefined;
      });
  }

  getVersion(key) {
    console.info('[StorageManager] - getVersion for key ', key);
    return this.db[this.storageName].where('key')
      .equals(this._checkKey(key))
      .first()
      .then((object) => {
        if (object) return object.version;
      })
      .catch(error => {
        console.info('error getting the version for ', key, ' with error: ', error);
        return undefined;
      });
  }

  delete(key) {
    return this.db[this.storageName]
      .where('key')
      .equals(this._checkKey(key))
      .delete();
  }

}

export default StorageManager;
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

  /**
 * Adds a new entry to the database for a given key, together with its version.
 * If an entry for the given key is already stored in the database, it will be updated.
 * @param {!string} key - key that can be used with {@link storageManager.get} to retrieve the value object
 * @param {!string} version - version descriptor for the given value
 * @param value - value stored in the database that is mapped to given key
 * @returns {Promise} result - Promise that will be fulfilled with the key if the entry was stored successfully,
 * otherwise it is rejected with an error.
 */
  set(key, version, value) {
    console.info('[StorageManager] - set ', key);

    return this.db[this.storageName].put({key: this._checkKey(key), version:version, value:value});
  }

/**
 * Get a entry value from the database for a given key.
 * If no entry is found undefined is returned.
 * @param {!string} key - key that was stored using {@link storageManager.set}
 * @returns {Promise} result - Promise that will be fulfilled with the value.
 */
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

/**
 * Get a entry version from the database for a given key.
 * If no entry is found undefined is returned.
 * @param {!string} key - key that was stored using {@link storageManager.set}
 * @returns {Promise} result - Promise that will be fulfilled with the version.
 */
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

/**
 * Delete a entry from the database for a given key.
 * @param {!string} key - key that was stored using {@link storageManager.set}
 * @returns {Promise} result - Promise that will be fulfilled with the number of affected rows.
 */
  delete(key) {
    return this.db[this.storageName]
      .where('key')
      .equals(this._checkKey(key))
      .delete();
  }

}

export default StorageManager;

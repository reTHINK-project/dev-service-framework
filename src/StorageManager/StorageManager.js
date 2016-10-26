class StorageManager {

  constructor() {
    let store = new Map();
    this.store = store;
  }

  set(key, version, value) {
    console.log('[Service Framework] - Set:', key, version, value);
    return new Promise((resolve, reject) => {
      try {
        resolve(this.store.set(key, {version: version, value: value}));
      } catch (e) {
        reject(e);
      }
    });
  }

  get(key) {
    console.log('[Service Framework] - Get:', key);
    return new Promise((resolve, reject) => {
      console.log('GET:', this.store.get(key));
      try {
        resolve(this.store.get(key));
      } catch (e) {
        reject(e);
      }
    });
  }

  getVersion(key) {
    console.log('[Service Framework] - Get Version:', key);
    return new Promise((resolve, reject) => {
      console.log('GET Version:', this.store.get(key));
      try {
        resolve(this.store.get(key).version);
      } catch (e) {
        reject(e);
      }
    });
  }

  delete(key) {
    console.log('[Service Framework] - Delete:', key);
    return new Promise((resolve, reject) => {
      try {
        resolve(this.store.delete(key));
      } catch (e) {
        reject(e);
      }
    });
  }

}

export default StorageManager;

import Request from './Request';
import { RuntimeCatalogue } from '../../src/RuntimeCatalogue';
import PersistenceManager from '../../src/persistence/PersistenceManager';

class RuntimeFactory {

  createSandbox() {
    return {};
  }

  createAppSandbox() {
    return {};
  }

  createHttpRequest() {
    let request = new Request();
    return request;
  }

  atob(b64) {
    return atob(b64);
  }

  persistenceManager() {
    let localStorage = window.localStorage;
    return new PersistenceManager(localStorage);
  }

  storageManager() {
    return {
      get: (key) => {
        console.log('get: ', key);
        return new Promise((resolve) => {
          resolve(undefined);
        });
      },

      set:(key, version, value) => {
        console.log('set: ', key, version, value);
        return new Promise((resolve) => {
          resolve(undefined);
        });
      },

      getVersion: (key) => {
        console.log('get version: ', key);
        return new Promise((resolve) => {
          resolve(undefined);
        });
      },

      delete: (key) => {
        console.log('delete: ', key);
        return new Promise((resolve) => {
          resolve(undefined);
        });
      }
    };

  }

  // TODO optimize the parameter was passed to inside the RuntimeCatalogue
  createRuntimeCatalogue() {

    let _this = this;
    let factory = {
      createHttpRequest: function() {
        return _this.createHttpRequest();
      }
    };

    return new RuntimeCatalogue(factory);

  }

  removeSandbox() {

  }

}

export default RuntimeFactory;

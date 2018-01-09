import Request from './Request';
import { RuntimeCatalogue } from '../../src/RuntimeCatalogue';
import PersistenceManager from '../../src/persistence/PersistenceManager';

import StorageManager from '../../src/StorageManager';

import  Dexie from 'dexie';

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

  storageManager(name, schemas) {

    if (!this.databases) { this.databases = {}; }
    if (!this.storeManager) { this.storeManager = {}; }

    // Using the implementation of Service Framework
    // Dexie is the IndexDB Wrapper
    if (!this.databases.hasOwnProperty(name)) {
      this.databases[name] = new Dexie(name);
    }

    if (!this.storeManager.hasOwnProperty(name)) {
      const schema = {
        runtimeCatalogue: '&cguid, accessControlPolicy, constraints, dataObjects, hypertyType, objectName, sourcePackageURL, version'
      }
      this.storeManager[name] = new StorageManager(this.databases[name], name, schema);
    }

    console.log(this.storeManager[name]);

    return this.storeManager[name];
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

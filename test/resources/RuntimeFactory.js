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

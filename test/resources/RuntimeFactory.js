import Request from './Request';
import {RuntimeCatalogueLocal, RuntimeCatalogue} from '../../src/RuntimeCatalogue';

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

  // TODO optimize the parameter was passed to inside the RuntimeCatalogue
  createRuntimeCatalogue() {

    let _this = this;
    let factory = {
      createHttpRequest: function() {
        return _this.createHttpRequest();
      }
    };

    return new RuntimeCatalogueLocal(factory);

  }

  removeSandbox() {

  }

}

export default RuntimeFactory;

import SandboxBrowser from '../sandboxes/SandboxBrowser';
import AppSandboxBrowser from '../sandboxes/AppSandboxBrowser';
import Request from '../browser/Request';
import {RuntimeCatalogueLocal, RuntimeCatalogue} from '../../src/RuntimeCatalogue';

class SandboxFactory {

  createSandbox() {
    return new SandboxBrowser();
  }

  createAppSandbox() {
    return new AppSandboxBrowser();
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

export default SandboxFactory;

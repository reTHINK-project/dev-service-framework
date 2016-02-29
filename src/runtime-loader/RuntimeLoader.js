import MiniBus from 'runtime-core/dist/minibus';

class RuntimeLoader {

  constructor(installerFactory, runtimeURL) {

    if (!installerFactory) throw Error('You need specify the Core Factory');
    if (!runtimeURL) throw Error('You need specify the runtime url will be loaded');

    let _this = this;
    _this._minibus = new MiniBus();
    _this._installerFactory = installerFactory;
    _this._runtimeURL = runtimeURL;

    _this.isInstalled = false;
  }

  install() {
    let _this = this;

    return new Promise(function(resolve, reject) {

      console.info('Installing the runtime ', _this._runtimeURL);
      _this._installerFactory.install(_this._minibus, _this._runtimeURL).then(function(success) {
        console.info('runtime installed with success');
        _this.isInstalled = true;
        resolve(success);
      }).catch(function(reason) {
        _this.isInstalled = false;
        console.error('runtime installation fail');
        reject(reason);
      });

    });
  }

  /**
   * Load hyperty from runtime core
   * @param  {URL.HypertyCatalogueURL} hypertyDescriptorURL hyperty catalogue URL
   * @return {Promise.<String>} hyperty deploy status
   */
  requireHyperty(hypertyDescriptorURL) {

    let _this = this;

    if (!_this.isInstalled) throw Error('The runtime is not installed or is in installing process');

    let from = 'app:requireHyperty';

    // TODO: change the messages to this:
    // from: <AppSandboxURL>/app
    // to: hyperty-runtime://<runtime-instance-identitifier>/runtime-ua
    // <runtime-instance-identitifier> should be generated wen the runtimeUA is instantiated;
    // body.resource = 'hyperty' || 'protostub'
    // body.value = <hypertyDescriptorURL> || <domain>;

    return new Promise(function(resolve, reject) {

      let msg = {
        from: from,
        to: 'core:loadHyperty',
        body: {
          value: {
            descriptor: hypertyDescriptorURL
          }
        }
      };

      _this._minibus._onMessage(msg);

      _this._minibus.addListener(from, function(msg) {
        if (!msg.body.hasOwnProperty('code')) {
          let hypertyURL = msg.body.value.runtimeHypertyURL;
          let hypertyComponent = window.components[hypertyURL];
          let hyperty = {
            runtimeHypertyURL: hypertyURL,
            status: msg.body.value.status,
            instance: hypertyComponent.instance,
            name: hypertyComponent.name
          };

          resolve(hyperty);

        } else {
          reject(msg.body.value);
        }
      });

    });

  }

  /**
   * Load proto stub from runtime core
   * @param  {URL.URL}     domain          domain
   * @return {Promise.<String>} hyperty deploy status
   */
  requireProtostub(domain) {
    let _this = this;
    let from = 'app:requireProtostub';

    return new Promise(function(resolve, reject) {

      let msg = {
        from: from,
        to: 'core:loadStub',
        body: {
          value: {
            domain: domain
          }
        }
      };

      _this._minibus._onMessage(msg);
      _this._minibus.addListener(from, function(msg) {
        if (!msg.body.hasOwnProperty('code')) {
          let protostubURL = msg.body.value.runtimeProtoStubURL;
          let protostubComponent = window.components[protostubURL];
          let protostub = {
            runtimeProtostubURL: protostubURL,
            status: msg.body.value.status,
            instance: protostubComponent.instance,
            name: protostubComponent.name
          };

          resolve(protostub);

        } else {
          reject(msg.body.value);
        }
      });
    });
  }
}

export default RuntimeLoader;

import MiniBus from 'runtime-core/dist/minibus';

class RuntimeLoader {

  constructor(coreFactory) {

    if (!coreFactory) throw Error('You need specifi the Core Factory');

    let _this = this;
    let miniBus = new MiniBus();
    _this._miniBus = miniBus;

    coreFactory.install(miniBus);
  }

  /**
   * Load hyperty from runtime core
   * @param  {URL.HypertyCatalogueURL} hypertyDescriptorURL hyperty catalogue URL
   * @return {Promise.<String>} hyperty deploy status
   */
  requireHyperty(hypertyDescriptorURL) {

    let _this = this;
    let from = 'app:requireHyperty';

    return new Promise(function(resolve, reject){

      let msg = {
        from: from,
        to: 'core:loadHyperty',
        body: {
          value: {
            descriptor: hypertyDescriptorURL
          }
        }
      }

      console.log(msg);
      _this._miniBus.postMessage(msg);
      _this._miniBus.addListener(from, function(msg) {
        if (!msg.body.hasOwnProperty('code')){
          resolve(msg.body.value);
        } else {
          reject(msg.body.value);
        }
      })

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

    return new Promise(function(resolve, reject){

      let msg = {
        from: from,
        to: 'core:loadStub',
        body: {
          value: {
            domain: domain
          }
        }
      }

      _this._miniBus.postMessage(msg);
      _this._miniBus.addListener(from, function(msg) {
        resolve(msg);
      })
    })
  }
}

export default RuntimeLoader;

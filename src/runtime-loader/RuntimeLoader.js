/**
* Copyright 2016 PT Inovação e Sistemas SA
* Copyright 2016 INESC-ID
* Copyright 2016 QUOBIS NETWORKS SL
* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
* Copyright 2016 ORANGE SA
* Copyright 2016 Deutsche Telekom AG
* Copyright 2016 Apizee
* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/

import MiniBus from 'runtime-core/dist/minibus';

class RuntimeLoader {

  constructor(coreFactory) {

    if (!coreFactory) throw Error('You need specifi the Core Factory');

    let _this = this;
    _this._minibus = new MiniBus();

    coreFactory.install(_this._minibus);
  }

  /**
   * Load hyperty from runtime core
   * @param  {URL.HypertyCatalogueURL} hypertyDescriptorURL hyperty catalogue URL
   * @return {Promise.<String>} hyperty deploy status
   */
  requireHyperty(hypertyDescriptorURL) {

    let _this = this;
    let from = 'app:requireHyperty';

    // from: <AppSandboxURL>/app
    // to: hyperty-runtime://<runtime-instance-identitifier>/runtime-ua
    // <runtime-instance-identitifier> should be generated wen the runtimeUA is instantiated;
    // body.resource = 'hyperty' || 'protostub'
    // body.value = <hypertyDescriptorURL> || <domain>;

    return new Promise(function(resolve, reject){

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
        if (!msg.body.hasOwnProperty('code')){
          let hypertyURL = msg.body.value.runtimeHypertyURL;
          let hypertyComponent = window.components[hypertyURL];
          let hyperty = {
            runtimeHypertyURL: hypertyURL,
            status: msg.body.value.status,
            instance: hypertyComponent.instance,
            name: hypertyComponent.name
          }

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

    return new Promise(function(resolve, reject){

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
        if (!msg.body.hasOwnProperty('code')){
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

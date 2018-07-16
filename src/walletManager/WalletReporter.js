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

// Service Framework
import Syncher from '../syncher/Syncher';

// Utils
import EventEmitter from '../utils/EventEmitter.js';
import {divideURL} from '../utils/utils.js';

// import availability from './availability.js';

/**
* Context Manager
* @author Paulo Chainho [paulo-g-chainho@alticelabs.com]
*/
class WalletReporter extends EventEmitter {

  constructor(hypertyURL, bus, configuration, syncher) {
    if (!hypertyURL) throw new Error('The hypertyURL is a needed parameter');
    if (!bus) throw new Error('The MiniBus is a needed parameter');
    if (!configuration) throw new Error('The configuration is a needed parameter');

    super(hypertyURL, bus, configuration);

    console.info('[WalletReporter] started with url: ', hypertyURL);

    this.syncher = syncher ? syncher : new Syncher(hypertyURL, bus, configuration);


    //    this.discovery = new Discovery(hypertyURL, bus);
    this.domain = divideURL(configuration.runtimeURL).domain;
    this.wallet = {};

    this.walletDescURL = 'hyperty-catalogue://catalogue.' + this.domain + '/.well-known/dataschema/WalletData';


    //    this.heartbeat = [];

    this.syncher.onNotification((event) => {
      let _this = this;
      _this.onNotification(event);
    });

    //TODO: uncomment when used with service framework develop branch

    this.syncher.onClose((event) => {

      console.log('[WalletReporter.onClose]');
      let _this = this;
      _this.setStatus(event.id, 'unavailable');
      event.ack();
    });

  }

  start() {
    let _this = this;

    return new Promise((resolve) => {

      // it is assumed no more than one wallet exists

      this.syncher.resumeReporters({store: true}).then((reporters) => {

        let reportersList = Object.keys(reporters);

        if (reportersList.length  > 0) {

          console.log('[WalletReporter.start] resuming ', reporters[reportersList[0]]);

          // set availability to available

          _this.wallet = reporters[0];

          _this._onSubscription(_this.wallet);

          resolve(_this.wallet);
        } else {
          console.log('[WalletReporter.start] nothing to resume ', reporters);
          resolve(false);
        }

      }).catch((reason) => {
        console.error('[WalletReporter] Resume failed | ', reason);
      });
    }).catch((reason) => {
      console.error('[WalletReporter] Start failed | ', reason);
    });
  }


  processNotification(event) {
    console.log('[WalletReporter.processNotification: ', event);

    event.ack();

  }

  /**
   * This function is used to create a new status object syncher
   * @param  {URL.UserURL} contacts List of Users
   * @return {Promise}
   */
  create(init, resources, name = 'myWallet', reporter = null, reuseURL = null) {
    //debugger;
    let _this = this;
    let input;
    return new Promise((resolve, reject) => {
      if (!reporter && !reuseURL) {
        input = {resources: resources, expires: 30};
      } else if (reporter && !reuseURL) {
        input = {resources: resources, expires: 30, reporter: reporter};
      } else if (!reporter && reuseURL) {
        input = {resources: resources, expires: 30, reuseURL: reuseURL};
      } else {
        input = {resources: resources, expires: 30, reuseURL: reuseURL, reporter: reporter};
      }

      console.info('[WalletReporter.create] lets create a new Wallet Object ', input);
      _this.syncher.create(_this.walletDescURL, [], init, true, false, name, null, input)
        .then((wallet) => {
          _this.wallet = wallet;

          _this._onSubscription(wallet);
          resolve(wallet);

        }).catch(function(reason) {
          reject(reason);
        });

    });

  }

  _onSubscription(wallet) {
    wallet.onSubscription((event) => {
      console.info('[WalletReporter._onSubscription] accepting: ', event);
      event.accept();
    });
  }

  addNewTransaction(newTransaction) {
    let _this = this;
    console.log('THIS [WalletReporter.setContext] before change :', _this.wallet);
    console.log('[WalletReporter.setContext] before change :', _this.wallet.data);

    _this.wallet.data.transactions.push(newTransaction);
    console.debug('[WalletReporter.addNewTransaction] after change :', _this.wallet.data);
    _this.trigger('wallet-update', newTransaction);

  }


}

export default WalletReporter;

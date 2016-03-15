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

/* jshint undef: true */

import HypertyDiscovery from '../hyperty-discovery/HypertyDiscovery';
import ConnectionController from './ConnectionController';
import EventEmitter from '../utils/EventEmitter';
import Syncher from '../syncher/Syncher';
import {divideURL} from '../utils/utils';

/**
* Hyperty Connector;
* @author Vitor Silva [vitor-t-silva@telecom.pt]
* @version 0.1.0
*/
class HypertyConnector extends EventEmitter {

  /**
  * Create a new Hyperty Connector
  * @param  {Syncher} syncher - Syncher provided from the runtime core
  */
  constructor(hypertyURL, bus, configuration) {

    if (!hypertyURL) throw new Error('The hypertyURL is a needed parameter');
    if (!bus) throw new Error('The MiniBus is a needed parameter');
    if (!configuration) throw new Error('The configuration is a needed parameter');

    super(hypertyURL, bus, configuration);

    let _this = this;
    _this._hypertyURL = hypertyURL;
    _this._bus = bus;
    _this._configuration = configuration;
    _this._domain = divideURL(hypertyURL).domain;

    _this._objectDescURL = 'hyperty-catalogue://' + _this._domain + '/.well-known/dataschemas/FakeDataSchema';

    _this._controllers = {};

    let domain = divideURL(hypertyURL).domain;
    _this.hypertyDiscovery = new HypertyDiscovery(domain, bus);

    let syncher = new Syncher(hypertyURL, bus, configuration);
    syncher.onNotification(function(event) {
      _this._onNotification(event);
    });

    _this._syncher = syncher;
  }

  _onNotification(event) {

    let _this = this;

    console.info('------------ Acknowledges the Reporter ------------ \n');
    event.ack();
    console.info('------------------------ END ---------------------- \n');

    console.log(_this._controllers[event.from]);
    if (_this._controllers[event.from]) {
      _this._autoSubscribe(event);
    } else {
      _this._autoAccept(event);
    }

  }

  _autoAccept(event) {
    let _this = this;
    let syncher = _this._syncher;

    console.info('---------------- Syncher Subscribe ---------------- \n');
    console.info('Subscribe URL Object ', event, syncher);

    syncher.subscribe(_this._objectDescURL, event.url).then(function(dataObjectObserver) {
      console.info('1. Return Subscribe Data Object Observer', dataObjectObserver);

      let connectionController = new ConnectionController(syncher, _this._domain);

      // TODO: remove this remotePeerInformation;
      connectionController.remotePeerInformation = event;
      connectionController.dataObjectObserver = dataObjectObserver;

      console.info('2. Data Object Observer data: ', JSON.stringify(dataObjectObserver.data));

      _this.trigger('connector:connected', connectionController);
      _this.trigger('have:notification', event);

      console.info('------------------------ END ---------------------- \n');
    }).catch(function(reason) {
      console.error(reason);
    });
  }

  _autoSubscribe(event) {
    let _this = this;
    let syncher = _this._syncher;

    console.info('---------------- Syncher Subscribe ---------------- \n');
    console.info('Subscribe URL Object ', event, syncher);
    syncher.subscribe(_this._objectDescURL, event.url).then(function(dataObjectObserver) {
      console.info('1. Return Subscribe Data Object Observer', dataObjectObserver);

      _this._controllers[event.from].dataObjectObserver = dataObjectObserver;

    }).catch(function(reason) {
      console.error(reason);
    });

  }

  /**
  * Establish connection with other client identifier
  * @param  {HypertyURL} HypertyURL - Define the identifier of the other component
  * @param  {Object} options - Object with options to improve the connect
  */
  connect(hypertyURL, options) {
    // TODO: CHange the hypertyURL for a list of URLS
    let _this = this;
    let syncher = _this._syncher;

    options = options || {video: true, audio: true};

    return new Promise(function(resolve, reject) {

      let connectionController;
      let _dataObjectReporter;

      console.info('------------------------ Syncher Create ---------------------- \n');
      syncher.create(_this._objectDescURL, [hypertyURL], {}).then(function(dataObjectReporter) {
        console.info('1. Return Create Data Object Reporter', dataObjectReporter);

        _dataObjectReporter = dataObjectReporter;

        connectionController = new ConnectionController(syncher, _this._domain);
        return connectionController.getUserMedia(options);
      })
      .then(function(mediaConstraints) {
        console.info('2. Return the media constraints from controller: ', mediaConstraints);

        connectionController.dataObjectReporter = _dataObjectReporter;
        _this._controllers[hypertyURL] = connectionController;

        resolve(connectionController);
        console.info('--------------------------- END --------------------------- \n');
      })
      .catch(function(reason) {
        console.error(reason);
        reject(reason);
      });

    });
  }

  // /**
  // * Accept the incoming call
  // * @method accept
  // * @return {Promise}
  // */
  // accept() {
  //   let _this = this;
  //
  //   return new Promise(function(resolve, reject) {
  //
  //     let objectURL = _this.notificationEvent.url;
  //
  //     // step 6 - https://github.com/reTHINK-project/scenario-service-implementation/tree/master/docs/hyperties/connector#notification-about-incoming-connection-request
  //     // after waiting for an answer, we can now subscribe the objectURL
  //     _this._syncher.subscribe(objectURL).then(function(connectionDataObject) {
  //       console.info('Return Subscribe Connection Data Object', connectionDataObject);
  //
  //       // step 7 and 10 - https://github.com/reTHINK-project/scenario-service-implementation/tree/master/docs/hyperties/connector#notification-about-incoming-connection-request
  //       _this.connectionController.dataObjectObserver = connectionDataObject;
  //       resolve(_this.connectionController);
  //
  //       let resources = connectionDataObject.data.resources;
  //       return _this.connectionController.getUserMedia(resources);
  //     })
  //     .then(function(commResources) {
  //       console.info('Get webRTC common resources', commResources);
  //     })
  //     .catch(function(reason) {
  //       console.error(reason);
  //       reject(reason);
  //     });
  //   });
  // }
  //
  // /**
  // * Connection is closed by local peer and disconnected;
  // * @method disconnect
  // * @return {Promise}
  // */
  // disconnect() {
  //
  //   let _this = this;
  //
  //   return new Promise(function(resolve, reject) {
  //
  //     _this.connectionController.disconnect()
  //     .then(function(disconnected) {
  //
  //       console.info('disconnected: ', disconnected);
  //
  //       resolve(disconnected);
  //     })
  //     .catch(function(reason) {
  //       reject(reason);
  //     });
  //
  //   });
  //
  // }
  //
  // _autoConnect(hypertyURL) {
  //   let _this = this;
  //
  //   _this._syncher.create({}, [hypertyURL], {}).then(function(connectionDataObject) {
  //     console.info('Return Create Connection Data Object', connectionDataObject);
  //     _this.connectionController.connectionDataObjectReporter = connectionDataObject;
  //   }).catch(function(reason) {
  //     console.error(reason);
  //   });
  // }

}

export default function activate(hypertyURL, bus, configuration) {

  return {
    name: 'HypertyConnector',
    instance: new HypertyConnector(hypertyURL, bus, configuration)
  };

}

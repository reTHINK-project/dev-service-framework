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

import {divideURL, convertToUserURL} from '../utils/utils';

/**
* Discovered Object interface
*/
class DiscoveredObject {

  get data() {
    return this._data;
  }

  constructor (data, runtimeURL, discoveryURL, msgBus) {
    this._data = data;
    this._registryObjectURL = data.hypertyID || data.url;
    this._runtimeURL = runtimeURL;
    this._domain = divideURL(runtimeURL).domain;
    this._discoveredObjectURL = discoveryURL;
    this._messageBus = msgBus;
    this._subscriptionSet = false;
    this._subscribers = {
      live: [],
      disconnected: []
    };
  }

  onLive(callback) {

    if(!this._subscriptionSet)
      this._subscribe();

    this._subscribers.live.push(callback);

  }

  onDisconnected(callback) {

    if(!this._subscriptionSet)
      this._subscribe();

    this._subscribers.disconnected.push(callback);

  }

  _subscribe() {

    const msg = {
      type: 'subscribe',
      from: this._discoveredObjectURL,
      to: 'domain://msg-node.' + this._domain + '/sm',
      body: {
        resources: [this._registryObjectURL + '/registration']
      }
    };

    this._messageBus.postMessage(msg, (reply) => {
      console.log(`[DiscoveredObject.subscribe] ${this._registryObjectURL} rcved reply `, reply);

      if(reply.body.code === 200) {
        this._subscriptionSet = true;
        this._generateListener(this._registryObjectURL + '/registration');
      }
      else
        console.error("Error subscribing ", this._registryObjectURL);
    });
  }

  _generateListener(notificationURL) {

    this._messageBus.addListener(notificationURL, (msg) => {
      console.log(`[DiscoveredObject.notification] ${this._registryObjectURL}: `, msg);
      this._processNotification(msg);
    });
  }

  _processNotification(msg) {

    this._subscribers[msg.body.value].forEach(fn => fn());
  }

}

export default DiscoveredObject;

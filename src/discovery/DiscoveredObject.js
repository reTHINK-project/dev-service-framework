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

  constructor(data, runtimeURL, discoveryURL, msgBus) {
    this._data = data;
    this._registryObjectURL = data.hypertyID || data.url;
    this._runtimeURL = runtimeURL;
    this._domain = divideURL(runtimeURL).domain;
    this._discoveredObjectURL = discoveryURL;
    this._messageBus = msgBus;
    this._subscriptionSet = false;
    this._subscribers = {
      live: {},
      disconnected: {}
    };
  }

  onLive(subscriber, callback) {

    return new Promise((resolve, reject) => {

      if (!this._subscriptionSet) {
        this._subscribe()
        .then(() => {
          this._subscribers.live[subscriber] = callback;
          resolve();
        })
        .catch((err) => reject(err));
      } else {
        this._subscribers.live[subscriber] = callback;
        resolve();
      }
    });
  }

  onDisconnected(subscriber, callback) {

    return new Promise((resolve, reject) => {

      if (!this._subscriptionSet) {
        this._subscribe()
        .then(() => {
          this._subscribers.disconnected[subscriber] = callback;
          resolve();
        })
        .catch((err) => reject(err));
      } else {
        this._subscribers.disconnected[subscriber] = callback;
        resolve();
      }
    });
  }

  _subscribe() {

    const msg = {
      type: 'subscribe',
      from: this._discoveredObjectURL,
      to: this._runtimeURL + '/subscriptions',
      body: {
        resources: [this._registryObjectURL + '/registration']
      }
    };

    return new Promise((resolve, reject) => {

      this._messageBus.postMessage(msg, (reply) => {
        console.log(`[DiscoveredObject.subscribe] ${this._registryObjectURL} rcved reply `, reply);

        if (reply.body.code === 200) {
          this._generateListener(this._registryObjectURL + '/registration');
          this._subscriptionSet = true;
          resolve();
        } else {
          console.error('Error subscribing ', this._registryObjectURL);
          reject('Error subscribing ' + this._registryObjectURL);
        }
      });
    });
  }

  _generateListener(notificationURL) {

    this._messageBus.addListener(notificationURL, (msg) => {
      console.log(`[DiscoveredObject.notification] ${this._registryObjectURL}: `, msg);
      this._processNotification(msg);
    });
  }

  _processNotification(msg) {
    const status = msg.body.value

    setTimeout( ()=>{// Hack to give time for onLive Hyperties to get ready. To be removed when Hyperty State machaine is implemented
      Object.keys(this._subscribers[status]).forEach(
        subscriber => this._subscribers[status][subscriber]()
      );

    }, 500);

  }

  _unsubscribe() {

    const msg = {
      type: 'unsubscribe',
      from: this._discoveredObjectURL,
      to: this._runtimeURL + '/subscriptions',
      body: {
        resource: this._registryObjectURL + '/registration'
      }
    };

    return new Promise((resolve, reject) => {

      this._messageBus.postMessage(msg, (reply) => {
        console.log(`[DiscoveredObject.unsubscribe] ${this._registryObjectURL} rcved reply `, reply);

        if (reply.body.code === 200) {
          resolve();
        } else {
          console.error('Error unsubscribing ', this._registryObjectURL);
          reject('Error unsubscribing ' + this._registryObjectURL);
        }
      });
    });
  }

  unsubscribeLive(subscriber, callback) {
    return new Promise((resolve, reject) => {

        if (subscriber in this._subscribers.live){
          delete this._subscribers.live[subscriber];

          if (this._areSubscriptionsEmpty()) {
            this._unsubscribe()
            .then(() => resolve())
            .catch((err) => reject(err));
          } else {
              resolve();
          }
        } else {
          reject(`${subscriber} doesn't subscribe onLive for ${this._registryObjectURL}`);
        }
    });
  }

  unsubscribeDisconnected(subscriber, callback) {
    return new Promise((resolve, reject) => {

      if (subscriber in this._subscribers.disconnected) {
        delete this._subscribers.disconnected[subscriber];

        if (this._areSubscriptionsEmpty()) {
          this._unsubscribe()
          .then(() => resolve())
          .catch((err) => reject(err));
        } else {
          resolve();
        }
      } else {
        reject(`${subscriber} doesn't subscribe onDisconnected for ${this._registryObjectURL}`);
      }
    });
  }

  _areSubscriptionsEmpty() {
    return Object.keys(this._subscribers.live).length === 0
      && Object.keys(this._subscribers.disconnected).length === 0
  }

}

export default DiscoveredObject;

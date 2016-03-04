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

import DataObjectReporter from './DataObjectReporter';
import DataObjectObserver from './DataObjectObserver';
import DataProvisional from './DataProvisional';

/**
 * The main class for the syncher package.
 * The Syncher is a singleton class per Hyperty/URL and it is the owner of all created Data Sync Objects according to the Reporter - Observer pattern.
 * Main functionality is to create reporters and to subscribe to existing ones.
 */
class Syncher {
  /* private
  _owner: URL
  _bus: MiniBus

  _subURL: URL

  _reporters: <url: DataObjectReporter>
  _observers: <url: DataObjectObserver>
  _provisionals: <url: DataProvisional>

  ----event handlers----
  _onNotificationHandler: (event) => void
  */

 /**
  * Constructor that should be used by the Hyperty owner
  * @param {HypertyURL} owner - Hyperty URL owner. An URL allocated by the runtime that uniquely identifies the Hyperty.
  * @param {MiniBus} bus - An instance of the MiniBus provided in the sandbox. When an object (Reporter or Observed) is created, the SyncherManager will add a listener in the MiniBus to receive/send Messages of that object.
  * @param {JSON} config - Configuration data. The only required field for now is the runtimeURL.
  */
 constructor(owner, bus, config) {
   let _this = this;

   _this._owner = owner;
   _this._bus = bus;

   _this._subURL = config.runtimeURL + '/sm';

   _this._reporters = {};
   _this._observers = {};
   _this._provisionals = {};

   bus.addListener(owner, (msg) => {
     console.log('Syncher-RCV: ', msg);
     switch (msg.type) {
       case 'forward': _this._onForward(msg); break;
       case 'create': _this._onRemoteCreate(msg); break;
     }
   });
 }

 /**
  * The owner of the Syncher and all created reporters.
  * @type {HypertyURL}
  */
 get owner() { return this._owner; }

 /**
  * All owned reporters, the ones that were created by a create
  * @type {Object<URL, DataObjectReporter>}
  */
 get reporters() { return this._reporters; }

 /**
  * All owned observers, the ones that were created by a local subscription
  * @type {Object<URL, DataObjectObserver>}
  */
 get observers() { return this._observers; }

 /**
  * Request a DataObjectReporter creation. The URL will be be requested by the allocation mechanism.
  * @param  {SchemaURL} schema - URL of the object descriptor
  * @param  {HypertyURL[]} observers - List of hyperties that are pre-authorized for subscription
  * @param  {JSON} initialData - Initial data of the reporter
  * @return {Promise<DataObjectReporter>} Return Promise to a new Reporter. The reporter can be accepted or rejected by the PEP
  */
 create(schema, observers, initialData) {
   let _this = this;

   let requestMsg = {
     type: 'create', from: _this._owner, to: _this._subURL,
     body: { schema: schema, value: initialData, authorise: observers }
   };

   return new Promise((resolve, reject) => {
     //request create to the Allocation system? Can be rejected by the PolicyEngine.
     _this._bus.postMessage(requestMsg, (reply) => {
       console.log('create-response: ', reply);
       if (reply.body.code === 200) {
         let objURL = reply.body.resource;

         //reporter creation accepted
         let newObj = new DataObjectReporter(_this, objURL, schema, 'on', initialData, reply.body.childrenResources);
         _this._reporters[objURL] = newObj;

         resolve(newObj);
       } else {
         //reporter creation rejected
         reject(reply.body.desc);
       }
     });
   });
 }

 /**
  * Request a subscription to an existent object.
  * @param {SchemaURL} schema - URL of the object descriptor
  * @param {ObjectURL} objURL - Address of the existent reporter object
  * @return {Promise<DataObjectObserver>} Return Promise to a new observer.
  */
 subscribe(schema, objURL) {
   let _this = this;

   //TODO: validate if subscription already exists ?
   let subscribeMsg = {
     type: 'subscribe', from: _this._owner, to: _this._subURL,
     body: { schema: schema, resource: objURL }
   };

   return new Promise((resolve, reject) => {
     //request subscription
     _this._bus.postMessage(subscribeMsg, (reply) => {
       console.log('subscribe-response: ', reply);
       let newProvisional = _this._provisionals[objURL];
       delete _this._provisionals[objURL];
       if (newProvisional) newProvisional.release();

       if (reply.body.code < 200) {
         newProvisional = new DataProvisional(_this._owner, objURL, _this._bus, reply.body.childrenResources);
         _this._provisionals[objURL] = newProvisional;
       } else if (reply.body.code === 200) {
         let newObj = new DataObjectObserver(_this, objURL, schema, 'on', reply.body.value, newProvisional.children, reply.body.version);
         _this._observers[objURL] = newObj;

         resolve(newObj);
         newProvisional.apply(newObj);
       } else {
         reject(reply.body.desc);
       }
     });
   });
 }

 /**
  * Setup the callback to process create and delete events of remove Reporter objects.
  * This is releated to the messagens sent by create to the observers Hyperty array.
  * @param {function(event: MsgEvent)} callback
  */
 onNotification(callback) {
   this._onNotificationHandler = callback;
 }

 _unsubscribe(objURL) {
   let _this = this;

   delete _this._observers[objURL];

   _this._bus.postMessage({
     type: 'unsubscribe', from: _this._owner, to: _this._subURL,
     body: { resource: objURL }
   });
 }

 _onForward(msg) {
   let _this = this;

   let reporter = _this._reporters[msg.body.to];
   reporter._onForward(msg);
 }

 _onRemoteCreate(msg) {
   let _this = this;

   //remove "/subscription" from the URL
   let resource = msg.from.slice(0, -13);

   let event = {
     type: msg.type,
     from: msg.body.source,
     url: resource,
     schema: msg.body.schema,
     value: msg.body.value,
     identity: msg.body.idToken,

     ack: (type) => {
       let lType = 200;
       if (type) {
         lType = type;
       }

       //send ack response message
       _this._bus.postMessage({
         id: msg.id, type: 'response', from: msg.to, to: msg.from,
         body: { code: lType }
       });
     }
   };

   if (_this._onNotificationHandler) {
     console.log('NOTIFICATION-EVENT: ', event);
     _this._onNotificationHandler(event);
   }
 }

}

export default Syncher;

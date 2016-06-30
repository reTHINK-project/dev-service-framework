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
     //ignore msg sent by himself
     if (msg.from !== owner) {
       console.log('Syncher-RCV: ', msg);
       switch (msg.type) {
         case 'forward': _this._onForward(msg); break;
         case 'create': _this._onRemoteCreate(msg); break;
         case 'delete': _this._onRemoteDelete(msg); break;
       }
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
  * @param  {SchemaURL} schema - Hyperty Catalogue URL address that can be used to retrieve the JSON-Schema describing the Data Object schema
  * @param  {HypertyURL[]} observers - List of hyperties that are pre-authorized for subscription
  * @param  {JSON} initialData - Initial data of the reporter
  * @return {Promise<DataObjectReporter>} Return Promise to a new Reporter. The reporter can be accepted or rejected by the PEP
  */
 create(schema, observers, initialData) {
   let _this = this;

   initialData.reporter = _this._owner;
   initialData.schema = schema;

   //FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onCreate
   let requestMsg = {
     type: 'create', from: _this._owner, to: _this._subURL,
     body: { scheme: schema, value: initialData, authorise: observers }
   };

   return new Promise((resolve, reject) => {
     //request create to the allocation system. Can be rejected by the PolicyEngine.
     _this._bus.postMessage(requestMsg, (reply) => {
       console.log('create-response: ', reply);
       if (reply.body.code === 200) {
         //reporter creation accepted
         let objURL = reply.body.resource;
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
  * Request a subscription to an existent reporter object.
  * @param {SchemaURL} schema - Hyperty Catalogue URL address that can be used to retrieve the JSON-Schema describing the Data Object schema
  * @param {ObjectURL} objURL - Address of the existent reporter object to be observed
  * @return {Promise<DataObjectObserver>} Return Promise to a new observer. It's associated with the reporter.
  */
 subscribe(schema, objURL) {
   let _this = this;

   //FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onLocalSubscribe
   let subscribeMsg = {
     type: 'subscribe', from: _this._owner, to: _this._subURL,
     body: { schema: schema, resource: objURL }
   };

   return new Promise((resolve, reject) => {
     //request subscription
     //Provisional data is applied to the DataObjectObserver after confirmation. Or discarded if there is no confirmation.
     //for more info see the DataProvisional class documentation.
     _this._bus.postMessage(subscribeMsg, (reply) => {
       console.log('subscribe-response: ', reply);
       let newProvisional = _this._provisionals[objURL];
       delete _this._provisionals[objURL];
       if (newProvisional) newProvisional._releaseListeners();

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
  * Request a read action on the reporter object
  * @param {ObjectURL} objURL - URL of the reporter object to be read
  * @return {Promise<Object>} Return Promise to last available data of the reporter
  */
 read(objURL) {
   let _this = this;

   //FLOW-OUT: this message will be sent directly to reporter object (maybe there is no listener available, so it will be resolved with MessageBus -> resolve)
   //will reach the remote object in DataObjectReporter -> _onRead
   let readMsg = {
     type: 'read', from: _this._owner, to: objURL
   };

   return new Promise((resolve, reject) => {
     _this._bus.postMessage(readMsg, (reply) => {
       console.log('read-response: ', reply);
       if (reply.body.code === 200) {
         resolve(reply.body.value);
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

 //FLOW-IN: message received from a local runtime ReporterObject -> _onRemoteSubscribe
 _onForward(msg) {
   let _this = this;

   let reporter = _this._reporters[msg.body.to];
   reporter._onForward(msg);
 }

 //FLOW-IN: message received from a remote Syncher -> create (this is actually an invitation to subscribe)
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
     identity: msg.body.identity,

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

 //FLOW-IN: message received from a remote DataObjectReporter -> delete
 _onRemoteDelete(msg) {
   let _this = this;

   //remove "/subscription" from the URL
   let resource = msg.body.resource;

   let object = _this._observers[resource];
   if (object) {
     let event = {
       type: msg.type,
       url: resource,
       identity: msg.body.identity,

       ack: (type) => {
         let lType = 200;
         if (type) {
           lType = type;
         }

         //TODO: any other different options for the release process, like accept but nor release local?
         if (lType === 200) {
           object.delete();
         }

         //send ack response message
         _this._bus.postMessage({
           id: msg.id, type: 'response', from: msg.to, to: msg.from,
           body: { code: lType, source: _this._owner }
         });
       }
     };

     if (_this._onNotificationHandler) {
       console.log('NOTIFICATION-EVENT: ', event);
       _this._onNotificationHandler(event);
     }
   } else {
     _this._bus.postMessage({
       id: msg.id, type: 'response', from: msg.to, to: msg.from,
       body: { code: 404, source: _this._owner }
     });
   }
 }

}

export default Syncher;

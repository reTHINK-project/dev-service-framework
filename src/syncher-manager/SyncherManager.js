import DataObjectReporter from './DataObjectReporter';
import DataObjectObserver from './DataObjectObserver';

/**
 * @author micaelpedrosa@gmail.com
 * Syncronization system.
 */
class SyncherManager {
  /* private
  _owner: URL
  _bus: MiniBus
  _config: Config

  _reporters: <url: DataObjectReporter>
  _observers: <url: DataObjectObserver>

  ----event handlers----
  _onInviteHandlers: [(event) => void]
  */

 constructor(owner, bus, config) {
   let _this = this;

   _this._owner = owner;
   _this._bus = bus;
   _this._config = config;

   _this._reporters = {};
   _this._observers = {};

   _this._onInviteHandlers = [];

   bus.addListener(owner, (msg) => {
     console.log('SyncherManager-RCV: ', msg);
     switch (msg.header.type) {
       case 'invite': _this._onInvite(msg); break;
       case 'uninvite': _this._onUnInvite(msg); break;
       case 'update': _this._onChange(msg); break;
       case 'add': _this._onChange(msg); break;
       case 'remove': _this._onChange(msg); break;
     }
   });
 }

 get owner() { return this._owner; }

 get reporters() { return this._reporters; }

 get observers() { return this._observers; }

 /**
  * Request a DataObjectReporter creation. The URL will be be requested by the allocation mechanism.
  * @param  {Schema} schema Schema of the object
  * @param  {HyperyURL | [HyperyURL]} invitations Hyperties that will be invited to observe.
  * @param  {JSON} initialData Object initial data
  * @return {Promise<DataObjectReporter>} Return Promise to a new Reporter. The reporter can be accepted or rejected by the PEP
  */
 create(schema, initialData) {
   let _this = this;

   //TODO: what to do with schema?

   //TODO: what is the url to request the ObjectURL ?
   let requestMsg = {
     header: {type: 'create', from: _this._owner, to: '<???-CreatorURL>'},
     body: {schema: schema}
   };

   return new Promise((resolve, reject) => {
     //request create to the Allocation system? Can be rejected by the PolicyEngine.
     _this._bus.postMessage(requestMsg, (reply) => {
       console.log('create-reply: ', reply);
       if (reply.body.code === 'ok') {
         let objUrl = reply.body.url;

         //reporter creation accepted
         let newObj = new DataObjectReporter(objUrl, schema, _this._bus, 'on', initialData);
         _this._reporters[objUrl] = newObj;
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
  * @param  {ObjectURL} url Address of the existent object.
  * @return {Promise<DataObjectObserver>} Return Promise to a new Observer.
  */
 subscribe(url) {
   let _this = this;

   //TODO: validate if subscription already exists ?
   let subscribeMsg = {
     header: {type: 'subscribe', from: _this._owner, to: url},
     body: {}
   };

   return new Promise((resolve, reject) => {
     //request subscription
     _this._bus.postMessage(subscribeMsg, (reply) => {
       console.log('subscribe-reply: ', reply);
       if (reply.body.code === 'ok') {
         //subscription accepted
         let newObj = new DataObjectObserver(_this._owner, url, reply.body.schema, 'on', reply.body.value);
         _this._observers[url] = newObj;
         resolve(newObj);
       } else {
         //subscription rejected
         reject(reply.body.desc);
       }
     });
   });
 }

 /**
  * Register listeners for invitations.
  * @param  {Function} callback Function to receive invitation events.
  */
 onInvite(callback) {
   this._onInviteHandlers.push(callback);
 }

 //receive and process intitation messages, and translate to an event
 _onInvite(msg) {
   let _this = this;

   //TODO: validate if subscription already exists ?
   let objUrl = msg.header.from;
   let objSchema = msg.header.schema;

   let event = {
     type: msg.header.type,
     url: objUrl,

     accept: () => {
       //create new observer
       let newObj = new DataObjectObserver(_this._owner, objUrl, objSchema, 'on', msg.body.value);
       _this._observers[objUrl] = newObj;

       //send ok reply message
       let acceptMsg = {
         header: {id: msg.header.id, type: 'reply', from: _this._owner, to: objUrl},
         body: {code: 'ok'}
       };

       _this._bus.postMessage(acceptMsg);
       return newObj;
     },

     reject: (reason) => {
       //send reject reply message
       let rejectMsg = {
         header: {id: msg.header.id, type: 'reply', from: _this._owner, to: objUrl},
         body: {code: 'reject', desc: reason}
       };

       _this._bus.postMessage(rejectMsg);
     }
   };

   _this._onInviteHandlers.forEach((handler) => {
     handler(event);
   });
 }

 //receive and process unintitation messages, and translate to an event
 _onUnInvite(msg) {
   let _this = this;

   let objUrl = msg.header.from;
   let observer = _this._observers[objUrl];
   delete _this._observers[objUrl];

   let event = {
     type: msg.header.type,
     url: objUrl,
     object: observer
   };

   _this._onInviteHandlers.forEach((handler) => {
     handler(event);
   });
 }

 _onChange(msg) {
   let _this = this;

   let observer = _this._observers[msg.header.from];
   observer._changeObject(msg);
 }

}

export default SyncherManager;

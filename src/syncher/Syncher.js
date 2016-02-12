import DataObjectReporter from './DataObjectReporter';
import DataObjectObserver from './DataObjectObserver';
import DataProvisional from './DataProvisional';

/**
 * @author micaelpedrosa@gmail.com
 * Client API Syncronization system.
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
  * @param {HypertyURL} owner - Hyperty URL owner
  * @param {MiniBus} bus - The internal sandbox MiniBus used by the Hyperty
  * @param {JSON} config - The only required field for now is runtimeURL
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
         let newObj = new DataObjectReporter(_this._owner, objURL, schema, _this._bus, 'on', initialData, reply.body.children);
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
         let newObj = new DataObjectObserver(_this._owner, objURL, schema, _this._bus, 'on', reply.body.value, newProvisional.children);

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

 _onForward(msg) {
   let _this = this;

   let reporter = _this._reporters[msg.body.to];
   reporter._onForward(msg);
 }

 _onRemoteCreate(msg) {
   let _this = this;

   let event = {
     type: msg.type,
     from: msg.from,
     url: msg.body.resource,
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
         body: { code: lType, source: msg.body.resource }
       });
     }
   };

   if (_this._onNotificationHandler) {
     _this._onNotificationHandler(event);
   }
 }

}

export default Syncher;

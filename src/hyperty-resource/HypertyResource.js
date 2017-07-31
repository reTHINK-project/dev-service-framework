/**
* The Hyperty Resource Data Model is used to model resouces handled by Hyperties and Data Objects including chat messages, files, real time human audio and video..
*
*/

class HypertyResource {

  /**
  * HypertyResource constructor
  *
  * @param  {URL} owner HypertyURL of the Hyperty handling this resource
  * @param  {URL} runtime Runtime URL where this resource is hosted
  * @param  {Bus} bus sandbox message bus
  * @param  {DataObject} parent Parent Data Object where the HypertyResource is handled as a child
  * @param  {Boolean} isReporter indicates if parent is Reporter or an Observer
  * @param  {Array} input optional input parameters
  */

  constructor(owner, runtime, bus, parent, isReporter, input) {
    let _this = this;

    if (!bus) throw new Error('[HypertyResource.constructor] missing mandatory *bus* parameter');
    if (!owner) throw new Error('[HypertyResource.constructor] missing mandatory *owner* parameter');
    if (!runtime) throw new Error('[HypertyResource.constructor] missing mandatory *runtime* parameter');
    if (!parent) throw new Error('[HypertyResource.constructor] missing mandatory *parent* parameter');
    if (!isReporter) throw new Error('[HypertyResource.constructor] missing mandatory *isReporter* parameter');

    _this._bus = bus;
    _this._owner = owner;
    _this._runtime = runtime;

    _this._parent = parent;
    _this._isReporter = isReporter;

    _this._metadata = input;

  }

  get type() {
    let _this = this;
    return _this.type;
  }

  get mimetype() {
    let _this = this;
    return _this._metadata.type;
  }

  get content() {
    let _this = this;
    return _this.content;
  }

  get contentURL() {
    let _this = this;
    return _this._metadata.contentURL;
  }

  set parent(parent) {
    let _this = this;
    _this._parent = parent;
  }

  save() {
    let _this = this;

    return new Promise(function(resolve, reject) {

      let msg = {
        from: _this._owner,
        to: _this._runtime + '/storage',
        type: 'create',
        body: { value: _this.content }
      }

      _this._bus.postMessage(msg, (reply) => {
        console.log('[HypertyResource.save] reply: ', reply);
        if (reply.body.code === 200) {
          _this._metadata.contentURL = reply.body.value;
          resolve();
        } else reject();
      });


    }).catch(function(reason) {
      console.error('Reason:', reason);
    });

  }

  read() {
    let _this = this;

    return new Promise(function(resolve, reject) {

      let msg = {
        from: _this._owner,
        to: _this._runtime + '/storage',
        type: 'read',
        body: { resource: _this._metadata.contentURL }
      }

      _this._bus.postMessage(msg, (reply) => {
        console.log('[HypertyResource.read] reply: ', reply);
        if (reply.body.code === 200) {
          _this.content = reply.body.value;
          resolve();
        } else reject();
      });


    }).catch(function(reason) {
      console.error('Reason:', reason);
    });

  }
}


export default HypertyResource;

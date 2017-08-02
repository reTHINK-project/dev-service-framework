/**
* The Hyperty Resource Data Model is used to model resouces handled by Hyperties and Data Objects including chat messages, files, real time human audio and video..
*
*/

class HypertyResource {

  /**
  * HypertyResource constructor
  *
  * @param  {URL} owner HypertyURL of the Hyperty handling this resource
  * @param  {URL} runtimeURL Runtime URL where this resource is hosted
  * @param  {Bus} bus sandbox message bus
  * @param  {DataObject} parent Parent Data Object where the HypertyResource is handled as a child
  * @param  {Boolean} isReporter indicates if parent is Reporter or an Observer
  * @param  {Array} input optional input parameters
  */

  constructor(owner, runtimeURL, bus, parent, isSender, input) {
    let _this = this;

    if (!bus) throw new Error('[HypertyResource.constructor] missing mandatory *bus* parameter');
    if (!owner) throw new Error('[HypertyResource.constructor] missing mandatory *owner* parameter');
    if (!runtimeURL) throw new Error('[HypertyResource.constructor] missing mandatory *runtimeURL* parameter');
    if (!parent) throw new Error('[HypertyResource.constructor] missing mandatory *parent* parameter');
    //if (!isSender) throw new Error('[HypertyResource.constructor] missing mandatory *isSender* parameter');

    _this._bus = bus;
    _this._owner = owner;
    _this._runtimeURL = runtimeURL;

    _this._parent = parent;

    _this._isSender = isSender;

    if (input)  _this._metadata = input;
    else  _this._metadata = {};

  }

  get type() {
    let _this = this;
    return _this._type;
  }

  get mimetype() {
    let _this = this;
    return _this._metadata.type;
  }

  get content() {
    let _this = this;
    return _this._content;
  }

  get contentURL() {
    let _this = this;
    return _this._metadata.contentURL;
  }

/*
  set parent(parent) {
    let _this = this;
    _this._parent = parent;
  }*/

  save() {
    let _this = this;

    return new Promise(function(resolve, reject) {

      let msg = {
        from: _this._owner,
        to: _this._runtimeURL + '/storage',
        type: 'create',
        body: { value: _this._content }
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
        to: _this._runtimeURL + '/storage',
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

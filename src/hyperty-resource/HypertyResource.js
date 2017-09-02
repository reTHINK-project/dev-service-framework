/**
* The Hyperty Resource Data Model is used to model resouces handled by Hyperties and Data Objects including chat messages, files, real time human audio and video..
*
*/

import { deepClone } from '../utils/utils.js';
import DataObjectChild from '../syncher/DataObjectChild.js';

class HypertyResource extends DataObjectChild {

  /**
  * HypertyResource constructor
  *
  * @param  {URL} localRuntimeURL RuntimeURL of local runtime
  * @param  {URL} input.owner HypertyURL of the Hyperty handling this resource
  * @param  {URL} input.runtime Runtime URL where this resource is hosted
  * @param  {Bus} input.bus sandbox message bus
  * @param  {DataObject} input.parent Parent Data Object where the HypertyResource is handled as a child
  * @param  {Boolean} isSender indicates if parent is Reporter or an Observer
  * @param  {Array} input optional input parameters
  */

  constructor(isSender, input) {
    super(input);
    let _this = this;

    _this._isSender = isSender;

    _this._localStorageURL = _this._parentObject._syncher._runtimeUrl + '/storage';

  }

  get resourceType() {
    let _this = this;
    return _this._resourceType;
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

  get shareable() {
    let _this = this;
    let shareable = super.metadata;
    shareable.resourceType = _this.resourceType;
    return shareable;
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
        to: _this._localStorageURL,
        type: 'create',
        body: { value: deepClone(_this._metadata) }
      };

      msg.body.value.content = _this._content;

      let id = _this._bus.postMessage(msg);

      _this._bus.addResponseListener( _this._owner, id, (reply) => {
        console.log('[HypertyResource.save] reply: ', reply);
        _this._bus.removeResponseListener(_this._owner, id);
        if (reply.body.code === 200) {
          if (reply.body.value) {
            _this._metadata.contentURL = reply.body.value;
          }
          resolve();
        } else reject(reply.body.code+ ' ' + reply.body.desc);

      });
    });

  }

  read() {
    let _this = this;
    console.log('[HypertyResource.read] ', this);

    return new Promise(function(resolve, reject) {

      if (_this.content) {
        resolve(_this);
      } else {

        //let storageUrl = _this._metadata.contentURL.split('/storage/')[0]+'/storage';

        let msg = {
          from: _this._owner,
          to: _this._runtime+'/storage',
          type: 'read',
          body: { resource: _this._metadata.contentURL, p2p: true }
        };

        if (_this.metadata.p2pRequester && _this.metadata.p2pHandler) {
          msg.body.p2pRequester = _this.metadata.p2pRequester;
          msg.body.p2pHandler = _this.metadata.p2pHandler;
        }


        let id = _this._bus.postMessage(msg);

        _this._bus.addResponseListener( _this._owner, id, (reply) => {
          console.log('[HypertyResource.read] reply: ', reply);
          if (reply.body.code === 200) {
            _this._content = reply.body.value.content;
            _this.save();
            _this._bus.removeResponseListener(_this._owner, id);
            resolve(_this);
          } else if (reply.body.code === 183) {// notify with progress percentage}
        } else {
          _this._bus.removeResponseListener(_this._owner, id);
          reject(reply.body.code+ ' ' + reply.body.desc);
        }
      });
    }

    }).catch(function(reason) {
      console.error('Reason:', reason);
    });

  }
}


export default HypertyResource;

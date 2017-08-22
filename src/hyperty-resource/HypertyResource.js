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
  * @param  {URL} input.owner HypertyURL of the Hyperty handling this resource
  * @param  {URL} input.runtime Runtime URL where this resource is hosted
  * @param  {Bus} input.bus sandbox message bus
  * @param  {DataObject} input.parent Parent Data Object where the HypertyResource is handled as a child
  * @param  {Boolean} isReporter indicates if parent is Reporter or an Observer
  * @param  {Array} input optional input parameters
  */

  constructor(isSender, input) {
    super(input);
    let _this = this;

    _this._isSender = isSender;

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
        to: _this._runtime + '/storage',
        type: 'create',
        body: { value: deepClone(_this._metadata) }
      }

      msg.body.value.content = deepClone(_this._content);

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
    console.log('[HypertyResource.read] ', this);

    return new Promise(function(resolve, reject) {

      if (_this.content) {
        resolve();
      } else {

        let msg = {
          from: _this._owner,
          to: _this._runtime + '/storage',
          type: 'read',
          body: { resource: _this._metadata.contentURL, p2p: true }
        };

        if (_this._parentObject.metadata.p2pRequester && _this._parentObject.metadata.p2pHandler) {
          msg.body.p2pRequester = _this._parentObject.metadata.p2pRequester;
          msg.body.p2pHandler = _this._parentObject.metadata.p2pHandler;
        }


        _this._bus.postMessage(msg, (reply) => {
          console.log('[HypertyResource.read] reply: ', reply);
          if (reply.body.code === 200) {
            _this.content = reply.body.value;
            resolve();
          } else reject(reply.body.code+ ' ' + reply.body.desc);
        });
      }

    }).catch(function(reason) {
      console.error('Reason:', reason);
    });

  }
}


export default HypertyResource;

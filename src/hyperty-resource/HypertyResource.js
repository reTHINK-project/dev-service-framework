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

    _this.arraybufferSizeLimit = 5242880; //above this limit content is not saved as ArrayBuffer

    _this._isSender = isSender;

    _this._localStorageURL = _this._parentObject._syncher._runtimeUrl + '/storage';

  }

  get resourceType() {
    let _this = this;
    return _this.metadata.resourceType;
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

      _this._bus.addResponseListener(_this._owner, id, (reply) => {
        console.log('[HypertyResource.save] reply: ', reply);
        _this._bus.removeResponseListener(_this._owner, id);
        if (reply.body.code === 200) {
          if (reply.body.value) {
            if (!_this._metadata.contentURL) _this._metadata.contentURL = [];
            _this._metadata.contentURL.push(reply.body.value);
          }
          resolve();
        } else reject(reply.body.code + ' ' + reply.body.desc);

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

        //TODO: use an iteration to get online runtime storages when some are offline

        let storage = _this._getBestContentURL(_this._metadata.contentURL);

        console.log('Storage:', storage);

        let msg = {
          from: _this._owner,
          to: storage.url,
          type: 'read',
          body: { resource: storage.resource, p2p: true }
        };

        if (_this.metadata.p2pRequester && _this.metadata.p2pHandler) {
          msg.body.p2pRequester = _this.metadata.p2pRequester;
          msg.body.p2pHandler = _this.metadata.p2pHandler;
        }


        let id = _this._bus.postMessage(msg);

        _this._bus.addResponseListener(_this._owner, id, (reply) => {
          console.log('[HypertyResource.read] reply: ', reply);

          if (reply.body.code === 200) {
            _this._content = reply.body.value.content;

            // save locally if not too big
            if (reply.body.value.size < _this.arraybufferSizeLimit) _this.save();

            _this._bus.removeResponseListener(_this._owner, id);
            resolve(_this);
          } else if (reply.body.code === 183) {
            // notify with progress percentage
          } else {
            _this._bus.removeResponseListener(_this._owner, id);
            reject(reply.body.code + ' ' + reply.body.desc);
          }
        });
      }

    }).catch(function(reason) {
      console.error('Reason:', reason);
    });

  }
  _getBestContentURL(contentURLList) {

    let _this = this;

    contentURLList.forEach((url) => {
      if (url.includes(_this._localStorageURL)) {
        return ({
          url: _this._localStorageURL, resource: url
        });
      }
    });

    let splitedResource = contentURLList[0].split('/storage/');
    let url = splitedResource[0] + '/storage';
    let resource = contentURLList[0];

    return {url: url, resource: resource };

  }

}


export default HypertyResource;

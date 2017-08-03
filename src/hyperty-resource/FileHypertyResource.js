/**
* The Hyperty Resource Data Model is used to model resouces handled by Hyperties and Data Objects including chat messages, files, real time human audio and video..
*
*/

import HypertyResource from './HypertyResource';

class FileHypertyResource extends HypertyResource {

  /**
  * FileHypertyResource constructor
  *
  * @param  {URL} owner HypertyURL of the Hyperty handling this resource
  * @param  {URL} runtime Runtime URL where this resource is hosted
  * @param  {Bus} bus sandbox message bus
  * @param  {DataObject} parent Parent Data Object where the HypertyResource is handled as a child
  * @param  {File} file file to be encoded as HypertyResource
  * @param  {Boolean} isReporter indicates if parent is Reporter or an Observer
  * @param  {Array} input optional input parameters
  */

  constructor(owner, runtime, bus, parent, isSender, metadata) {

    super(owner, runtime, bus, parent, isSender, metadata);

    let _this = this;

    _this._type = 'file';

  }

  init( file) {
    let _this = this;

    if (!file) throw new Error('[FileHypertyResource.constructor] missing mandatory *file* input ');

    return new Promise(function(resolve, reject) {

      _this._metadata.name = file.name;
      _this._metadata.lastModified = file.lastModified;
      _this._metadata.size = file.size;
      _this._metadata.mimetype = file.type;

      if (_this._isSender) {
        let reader = new FileReader();

        reader.onload = function(theFile) {

          _this._content = theFile.target.result;

          let mimetype = file.type.split('/')[0];

          switch (mimetype) {
            case 'image' :
              _this._getImageThumbnail(_this._content).then((thumbnail)=>{
                _this._metadata.thumbnail = thumbnail;
                resolve();
              });
              break;
            default :
              break;
          }
        resolve();

        }

        reader.readAsDataURL(file);

      } else {
        _this._content = file.content;
        if (file.thumbnail) _this._metadata.thumbnail = file.thumbnail;
        resolve();
      }

    });

  }

  _getImageThumbnail(image){

    return new Promise((resolve,reject)=>{
      let canvas = document.createElement('canvas');
      let img = new Image();
      img.src = image;


      img.onload = function () {
              let width = this.naturalWidth;
              let height = this.naturalHeight;
              var can = canvas,
                  ctx = can.getContext('2d');
                  ctx.drawImage(this, 0, 0, 250, (height / width) * 250);
                  console.log('[FileHypertyResource._getImageThumbnail] returning ', can.toDataURL());
                  resolve(can.toDataURL());
          };
    });

  }

  get name() {
    let _this = this;
    return _this._metadata.name;
  }

  get thumbnail() {
    let _this = this;
    return _this._metadata.thumbnail;
  }

  /**
  * Share file as a data object child of a data object parent
  *
  * @param  {string} children Data Object Parent children name where the file is shared
  */

  share(children) {
    let _this = this;

    return new Promise(function(resolve, reject) {
      //to be improved and adapted

      if (!_this._isSender) return reject('[FileHypertyResource.share] Observers can nott share files');

      let file2share = _this._metadata;
      file2share.type = _this._type;

      _this._parent.addChild(children, file2share).then(function(dataObjectChild) {
        console.log('[FileHypertyResource.share] object child: ', dataObjectChild);

        let sharedFile = {
          childId: dataObjectChild._childId,
          from: dataObjectChild._owner,
          value: dataObjectChild.data,
          type: 'create',
        };
        resolve(sharedFile);

      }).catch(function(reason) {
        console.error('Reason:', reason);
        reject(reason);
      });

    });

  }

  /**
  * Returns file content optimised to be displayed in a message line
  *
  * @param  {string} children Data Object Parent children name where the file is shared
  */

  toMessage() {
    //TODO: to be implemented. It should return HTML with img attribute as a thumbnail plus the name.
  }

}


export default FileHypertyResource;

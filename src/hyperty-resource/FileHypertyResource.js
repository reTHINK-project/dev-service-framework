/**
* The Hyperty Resource Data Model is used to model resouces handled by Hyperties and Data Objects including chat messages, files, real time human audio and video..
*
*/

import HypertyResource from './HypertyResource';
import { deepClone } from '../utils/utils.js';
import ImageTools from '../utils/ImageTools.js';


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

          console.log('[FileHypertyResource.init] file loaded ', theFile);

          _this._content = deepClone(theFile.target.result);

          let mimetype = file.type.split('/')[0];

          switch (mimetype) {
            case 'image' :
              _this._getImagePreview(file).then((preview)=>{
                _this._metadata.preview = preview;
                resolve();
              });
              break;
            default :
              resolve();
              break;
          }
        // resolve();

        }

        reader.readAsDataURL(file);

      } else {
        _this._content = file.content;
        if (file.preview) _this._metadata.preview = file.preview;
        resolve();
      }

    });

  }

 _getImagePreview(image){
   let reader = new FileReader();
   return new Promise((resolve,reject)=>{

   ImageTools.resize(image, {
        width: 100, // maximum width
        height: 100 // maximum height
    }, function(blob, didItResize) {
        // didItResize will be true if it managed to resize it, otherwise false (and will return the original file as 'blob')
        if (didItResize) {
          reader.readAsDataURL(blob);

          reader.onload = function(theImage) {
            resolve(theImage.target.result);
        };
      } else {
        console.warn('[FileHypertyResource._getImagePreview] unable to create image preview from original image ');
        resolve(undefined);
      }
    });
  });
 }



  get name() {
    let _this = this;
    return _this._metadata.name;
  }

  get preview() {
    let _this = this;
    return _this._metadata.preview;
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

      if (!_this._isSender) return reject('[FileHypertyResource.share] Observers can not share files');

      let file2share = _this._metadata;
      file2share.type = _this._type;

      _this._parent.addChild(children, file2share).then(function(dataObjectChild) {
        console.log('[FileHypertyResource.share] object child: ', dataObjectChild);

        let sharedFile = dataObjectChild.data;

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

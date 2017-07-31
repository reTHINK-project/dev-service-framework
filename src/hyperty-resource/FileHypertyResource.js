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

  constructor(owner, runtime, bus, parent, isReporter, file, input) {

    super(owner, runtime, bus, parent, isReporter, input);

    let _this = this;

    if (!file) throw new Error('[FileHypertyResource.constructor] missing mandatory file input ');

    if (isReporter) {
      _this._getContent(file);
      _this._thumbnail(file);
    } else {
      _this.content = file.content;
      _this._metadata.thumbnail = file.thumbnail;
    }

    _this.type = 'file';
    _this._metadata.name = file.name;
    _this._metadata.lastModified = file.lastModified;
    _this._metadata.size = file.size;
    _this._metadata.mimetype = file.type;

  }

  _getContent(file) {

    let _this = this;

    let reader = new FileReader();

    reader.onload = function(theFile) {
      _this.content = theFile.result;
    }

    reader.readAsBinaryString(file);

  }

  _thumbnail(file) {
    let _this = this;
    let img = document.createElement("img");
    let reader = new FileReader();

    //TODO: to be completed / adapted. Distinguish images from other files.

    reader.onload = function(theFile) {
      _this._metadata.thumbnail = theFile.result;
    }

    reader.readAsDataURL(file);

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

      if (!_this._isReporter) reject('[FileHypertyResource.share] Observers can nott share files');

      let file2share = _this.metadata;
      file2share.type = _this.type;

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

/**
* Copyright 2016 PT Inovação e Sistemas SA
* Copyright 2016 INESC-ID
* Copyright 2016 QUOBIS NETWORKS SL
* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
* Copyright 2016 ORANGE SA
* Copyright 2016 Deutsche Telekom AG
* Copyright 2016 Apizee
* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/

/**
 * @access private
 */
class DataProvisional {
  /* private
  _childrenListeners: [MsgListener]
  _listener: MsgListener

  _changes: []
  */

  constructor(owner, url, bus, children) {
    let _this = this;

    _this._changes = [];
    _this._children = children;
    _this._childrenListeners = [];

    _this._listener = bus.addListener(url, (msg) => {
      console.log('DataProvisional-' + url + '-RCV: ', msg);
      _this._changes.push(msg);
    });

    /*if (children) {
      let childBaseURL = url + '/children/';
      children.forEach((child) => {
        let childURL = childBaseURL + child;
        let listener = bus.addListener(childURL, (msg) => {
          //ignore msg sent by himself
          if (msg.from !== owner) {
            console.log(msg);
          }
        });

        _this._childrenListeners.push(listener);
      });
    }*/

  }

  get children() { return this._children; }

  apply(observer) {
    let _this = this;
    _this._changes.forEach((change) => {
      observer._changeObject(observer._syncObj, change);
    });
  }

  release() {
    this._listener.remove();

    /*this._childrenListeners.forEach((listener) => {
      listener.remove();
    });*/
  }
}

export default DataProvisional;

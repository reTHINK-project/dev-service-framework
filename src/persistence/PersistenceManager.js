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
class PersistenceManager {

  constructor(storage) {
    if (!storage) throw Error('The Persistence Manager needs the localStorage');
    let _this = this;
    _this.localStorage = storage;

  }

  set (key, version, value) {
    let _this = this;
    _this.localStorage.setItem(key, JSON.stringify({version: version, value: value}));
  }

  get (key) {
    let _this = this;
    try {
      return JSON.parse(_this.localStorage.getItem(key)).value;
    } catch (e) {
      // return undefined
    }
  }

  getVersion (key) {
    let _this = this;
    try {
      return JSON.parse(_this.localStorage.getItem(key)).version;
    } catch (e) {
      // return undefined
    }
  }

  delete (key) {
    let _this = this;
    _this.localStorage.removeItem(key);
  }
}

export default PersistenceManager;

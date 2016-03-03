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
 * Created by amo on 14/11/2015.
 */

import CatalogueDataObject from './CatalogueDataObject';

class HypertyRuntimeDescriptor extends CatalogueDataObject {

    constructor(guid, catalogueType, objectName, description, language, sourcePackageURL, runtimeType,
                hypertyCapabilities, protocolCapabilities) {
        super(guid, catalogueType, objectName, description, language, sourcePackageURL);

        this._runtimeType = runtimeType;

        if (hypertyCapabilities)
            this._hypertyCapabilities = hypertyCapabilities;
        else
            this._hypertyCapabilities = {};
        if (protocolCapabilities)
            this._protocolCapabilities = protocolCapabilities;
        else
            this._protocolCapabilities = {};
    }

    get runtimeType() {
        return this._runtimeType;
    }

    get hypertyCapabilities() {
        return this._hypertyCapabilities;
    }

    get protocolCapabilities() {
        return this._hypertyCapabilities;
    }

    set runtimeType(runtimeType) {
        if (runtimeType)
            this._runtimeType = runtimeType;
    }

    set hypertyCapabilities(hypertyCapabilities) {
        if (hypertyCapabilities)
            this._hypertyCapabilities = hypertyCapabilities;
    }

    set protocolCapabilities(protocolCapabilities) {
        if (protocolCapabilities)
            this._protocolCapabilities = protocolCapabilities;
    }
}

export var RuntimeType = {BROWSER: 'browser', STANDALONE: 'standalone', SERVER: 'server', GATEWAY: 'gateway'};
export var RuntimeHypertyCapabilityType = {
    MIC: 'mic', CAMERA: 'camera', SENSOR: 'sensor', WEBRTC: 'webrtc',
    ORTC: 'ortc'
};
export var RuntimeProtocolCapabilityType = {
    HTTP: 'http', HTTPS: 'https', WS: 'ws', WSS: 'wss', COAP: 'coap',
    DATACHANEL: 'datachannel'
};
export default HypertyRuntimeDescriptor;

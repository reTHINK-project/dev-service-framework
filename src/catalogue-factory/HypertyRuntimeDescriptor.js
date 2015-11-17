/**
 * Created by amo on 14/11/2015.
 */

import CatalogueDataObject from './CatalogueDataObject';

class HypertyRuntimeDescriptor extends CatalogueDataObject{

    constructor(guid, catalogueType, objectName, description, language, sourcePackageURL, runtimeType, hypertyCapabilities, protocolCapabilities){
        super(guid, catalogueType, objectName, description, language, sourcePackageURL);

        this._runtimeType = runtimeType;
        if(hypertyCapabilities)
            this._hypertyCapabilities = hypertyCapabilities;
        else
            this._hypertyCapabilities = {};
        if(protocolCapabilities)
            this._protocolCapabilities = protocolCapabilities;
        else
            this._protocolCapabilities = {};
    }

    get runtimeType(){ return this._runtimeType; }

    get hypertyCapabilities(){ return this._hypertyCapabilities; }

    get protocolCapabilities(){ return this._hypertyCapabilities; }
}

export var RuntimeType = { BROWSER: 'browser', STANDALONE: 'standalone', SERVER: 'server', GATEWAY: 'gateway'};
export var RuntimeHypertyCapabilityType = { MIC: 'mic', CAMERA: 'camera', SENSOR: 'sensor', WEBRTC: 'webrtc', ORTC: 'ortc'};
export var RuntimeProtocolCapabilityType = { HTTP: 'http', HTTPS: 'https', WS: 'ws', WSS: 'wss', COAP: 'coap', DATACHANEL: 'datachannel'};
export default HypertyRuntimeDescriptor;

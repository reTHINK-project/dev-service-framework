/**
 * Created by amo on 14/11/2015.
 */

import RuntimeProtocolCapabilityType from './HypertyRuntimeDescriptor/RuntimeProtocolCapabilityType';

class ProtocolStubDescriptor extends CatalogueDataObject{
    constructor(guid, type, objectName, description, language, sourcePackageURL, messageSchemas, configurationList, constraintList){
        super(guid, type, objectName, description, language, sourcePackageURL);

        this._messageSchemas = messageSchemas;
        if(configurationList)
            this._configurationList = configurationList;
        else
            this._configurationList = {};

        if(constraintList)
            this._constraintsList = constraintList;
        else
            this._constraintsList = {};
    }

    get messageSchemas(){ return this._messageSchemas; }

    get constraintsList() { return this._constraintsList; }

    get configurationList(){ return this._configurationList; }
}
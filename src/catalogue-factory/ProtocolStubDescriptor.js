/**
 * Created by amo on 14/11/2015.
 */

import CatalogueDataObject from './CatalogueDataObject';
import RuntimeProtocolCapabilityType from './HypertyRuntimeDescriptor';

class ProtocolStubDescriptor extends CatalogueDataObject{
    constructor(guid, type, objectName, description, language, sourcePackageURL, messageSchemas, configuration,
                constraints){
        super(guid, type, objectName, description, language, sourcePackageURL);

        this._messageSchemas = messageSchemas;
        if(configuration)
            this._configuration = configuration;
        else
            this._configuration = {};

        if(constraints)
            this._constraints = constraints;
        else
            this._constraints = {};
    }

    get messageSchemas(){ return this._messageSchemas; }

    get constraints() { return this._constraints; }

    get configuration(){ return this._configuration; }
}

export default ProtocolStubDescriptor;
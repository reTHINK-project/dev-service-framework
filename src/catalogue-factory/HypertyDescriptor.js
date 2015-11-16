/**
 * Created by amo on 14/11/2015.
 */
import CatalogueDataObject from './CatalogueDataObject';

class HypertyDescriptor extends CatalogueDataObject{
    
    constructor(guid, catalogueType, objectName, description, language, sourcePackageURL, hypertyType, dataObjects) {
        super(guid, catalogueType, objectName, description, language, sourcePackageURL);

        this._configurationDataList = [];
        this._runtimeConstraintList = [];
        this._policies = [];
        this._messageSchema = null;

        this._hypertyType = hypertyType;
        this._dataObjects = dataObjects;
    }

    get hypertyType() { return this._hypertyType; }

    get dataObjects() { return this._dataObjects; }

    get configurationDataList() {return this._configurationDataList; }

    get runtimeConstraintList() { return this._runtimeConstraintList; }

    get messageSchema(){ return this._messageSchema; }

    toJSON(){
        "use strict";

    }
}



export var RuntimeHypertyCapabilityType = {}
export var HypertyType = {COMMUNICATOR : 'communicator', IDENTITY: 'identity', CONTEXT: 'context'};
export default HypertyDescriptor;
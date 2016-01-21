/**
 * Created by amo on 14/11/2015.
 */
import CatalogueDataObject from './CatalogueDataObject';

class HypertyDescriptor extends CatalogueDataObject{
    
    constructor(guid, catalogueType, objectName, description, language, sourcePackageURL, hypertyType, dataObjects) {
        super(guid, catalogueType, objectName, description, language, sourcePackageURL);

        this._configuration = {};
        this._constraints = {};
        this._policies = {};
        this._messageSchema = null;

        this._hypertyType = hypertyType;
        this._dataObjects = dataObjects;
    }

    get hypertyType() { return this._hypertyType; }

    get dataObjects() { return this._dataObjects; }

    get configuration() {return this._configuration; }

    get constraints() { return this._constraints; }

    get messageSchema(){ return this._messageSchema; }

    get policies() { return this._policies; }

    set hypertyType(hType) {
        if(hType)
            this._hypertyType = hType;
    }

    set dataObjects(dataObjectUrl) {
        if(dataObjectUrl)
            this._dataObjects = dataObjectUrl;
    }

    set configuration(configuration) {
        if(configuration)
            this._configuration = configuration;
    }

    set constraints(constraints) {
        if(constraints)
            this._constraints = constraints;
    }

    set messageSchema(msgSchema){
        if(msgSchema)
            this._messageSchema = msgSchema;
    }

    set policies (policyList){
        if(policyList)
            this._policies = policyList;
    }

}



export var RuntimeHypertyCapabilityType = {};
export var HypertyType = {COMMUNICATOR : 'communicator', IDENTITY: 'identity', CONTEXT: 'context'};
export default HypertyDescriptor;
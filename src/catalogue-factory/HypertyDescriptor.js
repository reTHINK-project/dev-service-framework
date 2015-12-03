/**
 * Created by amo on 14/11/2015.
 */
import CatalogueDataObject from './CatalogueDataObject';

class HypertyDescriptor extends CatalogueDataObject{
    
    constructor(guid, catalogueType, objectName, description, language, sourcePackageURL, hypertyType, dataObjects) {
        super(guid, catalogueType, objectName, description, language, sourcePackageURL);

        this._configurationDataList = {};
        this._runtimeConstraintList = {};
        this._policies = {};
        this._messageSchema = null;

        this._hypertyType = hypertyType;
        this._dataObjects = dataObjects;
    }

    get hypertyType() { return this.hypertyType; }

    get dataObjects() { return this.dataObjects; }

    get configurationDataList() {return this.configurationDataList; }

    get runtimeConstraintList() { return this.runtimeConstraintList; }

    get messageSchema(){ return this.messageSchema; }

    get policies() { return this.policies; }

    set hypertyType(hType) {
        if(hType)
            this._hypertyType = hType;
    }

    set dataObjects(dataObjectUrl) {
        if(dataObjectUrl)
            this._dataObjects = dataObjectUrl;
    }

    set configurationDataList(configDataList) {
        if(configDataList)
            this._configurationDataList = configDataList;
    }

    set runtimeConstraintList(runtimeConstList) {
        if(runtimeConstList)
            this._runtimeConstraintList = runtimeConstList;
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
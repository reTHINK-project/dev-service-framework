/**
 * Created by amo on 14/11/2015.
 */
import CatalogueDataObject from './CatalogueDataObject';

class HypertyDescriptor extends CatalogueDataObject{
    
    constructor(guid, catalogueType, objectName, description, language, sourcePackageURL, hypertyType, dataObjects) {
        super(guid, catalogueType, objectName, description, language, sourcePackageURL);

        this.configurationDataList = {};
        this.runtimeConstraintList = {};
        this.policies = {};
        this.messageSchema = null;

        this.hypertyType = hypertyType;
        this.dataObjects = dataObjects;
    }

    get hypertyType() { return this.hypertyType; }

    get dataObjects() { return this.dataObjects; }

    get configurationDataList() {return this.configurationDataList; }

    get runtimeConstraintList() { return this.runtimeConstraintList; }

    get messageSchema(){ return this.messageSchema; }

    get policies() { return this.policies; }

    set hypertyType(hType) {
        if(hType)
            this.hypertyType = hType;
    }

    set dataObjects(dataObjectUrl) {
        if(dataObjectUrl)
            this.dataObjects = dataObjectUrl;
    }

    set configurationDataList(configDataList) {
        if(configDataList)
            this.configurationDataList = configDataList;
    }

    set runtimeConstraintList(runtimeConstList) {
        if(runtimeConstList)
            this.runtimeConstraintList = runtimeConstList;
    }

    set messageSchema(msgSchema){
        if(msgSchema)
            this._messageSchema = msgSchema;
    }

    set policies (policyList){
        if(policyList)
            this.policies = policyList;
    }

}



export var RuntimeHypertyCapabilityType = {}
export var HypertyType = {COMMUNICATOR : 'communicator', IDENTITY: 'identity', CONTEXT: 'context'};
export default HypertyDescriptor;
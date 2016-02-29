/**
 * Created by amo on 14/11/2015.
 */
import CatalogueDataObject from './CatalogueDataObject';

class HypertyDescriptor extends CatalogueDataObject {

    constructor(guid, catalogueType, version, objectName, description, language, sourcePackageURL, hypertyType, dataObjects) {
        super(guid, catalogueType, version, objectName, description, language, sourcePackageURL);

        this._configuration = {};
        this._constraints = {};
        this._policies = {};
        this._messageSchema = null;

        this._hypertyType = hypertyType;
        this._dataObjects = dataObjects;
    }

    get hypertyType() {
        return this._hypertyType;
    }

    get dataObjects() {
        return this._dataObjects;
    }

    get configuration() {
        return this._configuration;
    }

    get constraints() {
        return this._constraints;
    }

    get messageSchema() {
        return this._messageSchema;
    }

    get policies() {
        return this._policies;
    }

    set hypertyType(hType) {
        if (hType)
            this._hypertyType = hType;
    }

    set dataObjects(dataObjects) {
        if (dataObjects)
            this._dataObjects = dataObjects;
    }

    set configuration(configuration) {
        if (configuration)
            this._configuration = configuration;
    }

    set constraints(constraints) {
        if (constraints)
            this._constraints = constraints;
    }

    set messageSchema(messageSchema) {
        if (messageSchema)
            this._messageSchema = messageSchema;
    }

    set policies(policies) {
        if (policies)
            this._policies = policies;
    }

}


export var RuntimeHypertyCapabilityType = {};
export var HypertyType = {COMMUNICATOR: 'communicator', IDENTITY: 'identity', CONTEXT: 'context'};
export default HypertyDescriptor;
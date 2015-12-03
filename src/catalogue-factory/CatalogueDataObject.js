/**
 * Created by amo on 14/11/2015.
 */
class CatalogueDataObject {
    /**
     * Creates the Catalogue Data Object
     * @param guid - Global Unique identifier of the Catalogue Object (e.g. Hyperty descriptor, ProtocolStub descriptor,
     * etc) enabling the same object to be stored and discovered in different Catalogues. That means, guid corresponds to
     * <resource-type-id> per BNF of Resource Path. Couldn't we have problems with too long URL paths?
     * @param type - indicates the type of Catalogue Data Object e.g. Hyperty, ProtocolStub, etc
     * @param objectName - human-understandable name of the catalogue object e.g. "My Awesome Hyperty"
     * @param description - description of the source package
     * @param language - the programming language used in the SourcePackage.SourceCode
     * @param sourcePackageURL - A string containing the URL from where the source code package of the corresponding
     * catalogue object, e.g. deployable packages containing executable code for Hyperties or ProtoStubs, can be downloaded
     */
    constructor(guid, type, objectName, description, language, sourcePackageURL) {
        this._guid = guid;
        this._type = type;
        this._objectName = objectName;
        this._description = description;
        this._language = language;
        this._sourcePackageURL = sourcePackageURL;

        this._signature = null;
        this._sourcePackage = null;
    }

    // Getters
    get guid() {
        return this._guid;
    }

    get type() {
        return this._type;
    }

    get objectName() {
        return this._objectName;
    }

    get description() {
        return this._description;
    }

    get language() {
        return this._language;
    }

    get signature() {
        return this._signature;
    }

    get sourcePackage() {
        return this._sourcePackage;
    }


    // Setters
    /**
     * Set the signature to enables integrity and authenticity verification
     * @param signature
     */
    set signature(signature) {
        if (signature)
            this._signature = signature;

    }

    set sourcePackage(srcPackage) {
        if (srcPackage)
            this._sourcePackage = srcPackage;

    }
}

export var CatalogueObjectType = {
    HYPERTY: 'hyperty', PROTOSTUB: 'protostub', HYPERTY_RUNTIME: 'hyperty_runtime',
    HYPERTY_INTERCEPTOR: 'hyperty_inspector', HYPERTY_DATA_OBJECT: 'hyperty_data_object',
    POLICY_ENFORCER: 'policy_enforcer'
};
export var DataObjectSourceLanguage = {
    JAVASCRIPT_ECMA6: 'javascript_ecma6', JAVASCRIPT_ECMA5: 'javascript_ecma5',
    JSON_SCHEMA_V4: 'json_schema_v4', PYTHON: 'python', TYPESCRIPT: 'typescript'
};
export default CatalogueDataObject;
/**
 * Created by amo on 14/11/2015.
 */
class CatalogueDataObject{
    /*
     guid	string	yes	Global Unique identifier of the Catalogue Object (e.g. Hyperty descriptor, ProtocolStub descriptor, etc) enabling the same object to be stored and discovered in different Catalogues. That means, guid corresponds to <resource-type-id> per BNF of Resource Path. Couldn't we have problems with too long URL paths?
     type	CatalogueObjectType	yes	Indicates the type of Catalogue Data Object e.g. Hyperty, ProtocolStub, etc
     objectName	string	yes	human-understable name of the catalogue object e.g. "My Awesome Hyperty".
     sourcePackageURL	string	yes	A string containing the URL from where the source code package of the corresponding catalogue object, e.g. deployable packages containing executable code for Hyperties or ProtoStubs, can be downloaded. Question: should this only be the pure URL or should it also include the protocol used to download it, i.e. http://xxxxx or ftp://xxxxx etc)
     sourcePackage	string	no	The deployable packages of the catalogue object (i.e. the executable of the Hyperty or ProtoStubs). Note: The sourcePackage attribute must be present if the sourcePackageURL points to this attribute.
     language	DataObjectSourceLanguage	yes	The programming language used in the SourcePackage.SourceCode e.g. Javascript ECMA5 for Hyperties or JSON-Schema for Data Object Schemas. The main purpose of this attribute is to make reTHINK agnostic of the programming language used.
     signature	string	no	Enables integrity and authenticity verification of Data Object catalogue.
     */
    constructor(guid, type, objectName, description, language, sourcePackageURL){
        this._guid = guid;
        this._type = type;
        this._objectName = objectName;
        this._descriptiom = description;
        this._language = language;
        this._sourcePackageURL = sourcePackageURL;

        this._signature = null;
        this._sourcePackage = null;
    }

    // Getters
    get guid(){ return this._guid; }

    get type(){ return this._type; }

    get objectName(){return this._objectName; }

    get description(){ return this._descriptiom; }

    get language() {return this._language; }

    get signature() { return this._signature; }

    get sourcePackage(){ return this._sourcePackage; }


    // Setters
    /**
     * Set the signature to enables integrity and authenticity verification
     * @param signature
     */
    set signature(signature){
        if(signature)
            this._signature = signature;

    }

    set sourcePackage(srcPackage){
        if(srcPackage)
            this._sourcePackage = srcPackage;

    }
}
class SourcePackage{

}

export var CatalogueObjectType = { HYPERTY: 'hyperty', PROTOSTUB: 'protostub', HYPERTY_RUNTIME: 'hyperty_runtime', HYPERTY_INSPECTOR: 'hyperty_inspector', HYPERTY_DATA_OBJECT: 'hyperty_data_object'};
export var DataObjectSourceLanguage = {JAVASCRIPT_ECMA6: 'javascript_ecma6', JAVASCRIPT_ECMA5: 'javascript_ecma5', JSON_SCHEMA_V4: 'json_schema_v4', PYTHON: 'python', TYPESCRIPT: 'typescript'};
export default CatalogueDataObject;
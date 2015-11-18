/**
 * Created by amo on 14/11/2015.
 */
class CatalogueDataObject{

    /**
     * Creates the Cataloogue Data Object
     * @param guid - Global Unique identifier of the Catalogue Object (e.g. Hyperty descriptor, ProtocolStub descriptor, etc) enabling the same object to be stored and discovered in different Catalogues. That means, guid corresponds to <resource-type-id> per BNF of Resource Path. Couldn't we have problems with too long URL paths?
     * @param type - indicates the type of Catalogue Data Object e.g. Hyperty, ProtocolStub, etc
     * @param objectName - human-understable name of the catalogue object e.g. "My Awesome Hyperty"
     * @param description - desciption of the source package
     * @param language - the programming language used in the SourcePackage.SourceCode
     * @param sourcePackageURL - A string containing the URL from where the source code package of the corresponding catalogue object, e.g. deployable packages containing executable code for Hyperties or ProtoStubs, can be downloaded
     */
    constructor(guid, type, objectName, description, language, sourcePackageURL){
        this.guid = guid;
        this.type = type;
        this.objectName = objectName;
        this.description = description;
        this.language = language;
        this.sourcePackageURL = sourcePackageURL;

        this.signature = null;
        this.sourcePackage = null;
    }

    // Getters
    get guid(){ return this.guid; }

    get type(){ return this.type; }

    get objectName(){return this.objectName; }

    get description(){ return this.descriptiom; }

    get language() {return this.language; }

    get signature() { return this.signature; }

    get sourcePackage(){ return this.sourcePackage; }

    get sourcePackageURL(){ return this.sourcePackageURL; }


    // Setters
    set guid(guid){
        if(guid)
            this.guid = guid;
    }

    set type(catalogueType){
        if(catalogueType)
            this.type = catalogueType;
    }

    set objectName(oName){
        if(oName)
            this.objectName = oName;
    }
    set description(desc){
        if(desc)
            this.description = desc;
    }
    set language(lang){
        if(lang)
            this.language = lang;
    }

    set signature(signature){
        if(signature)
            this.signature = signature;
    }

    set sourcePackage(srcPackage){
        if(srcPackage)
            this.sourcePackage = srcPackage;
    }

    set sourcePackageURL(srcPackageUrl){
        if(srcPackageUrl)
            this.sourcePackageURL = srcPackageUrl;
    }

}
export class SourcePackage{
    constructor(encoding, sourceCodeClassname, sourceCode, signature){
        "use strict";
        this.encoding = encoding;
        this.sourceCodeClassname = sourceCodeClassname;
        this.sourceCode = sourceCode;
        this.signature = signature;
    }

}

export var CatalogueObjectType = { HYPERTY: 'hyperty', PROTOSTUB: 'protostub', HYPERTY_RUNTIME: 'hyperty_runtime', HYPERTY_INSPECTOR: 'hyperty_inspector', HYPERTY_DATA_OBJECT: 'hyperty_data_object'};
export var DataObjectSourceLanguage = {JAVASCRIPT_ECMA6: 'javascript_ecma6', JAVASCRIPT_ECMA5: 'javascript_ecma5', JSON_SCHEMA_V4: 'json_schema_v4', PYTHON: 'python', TYPESCRIPT: 'typescript'};
export default CatalogueDataObject;
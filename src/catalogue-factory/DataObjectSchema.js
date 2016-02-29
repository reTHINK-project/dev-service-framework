/**
 * Created by pzu on 19.11.15.
 */

import CatalogueDataObject from './CatalogueDataObject';

class DataObjectSchema extends CatalogueDataObject {
    constructor(guid, type, version, objectName, description, language, sourcePackageURL) {
        super(guid, type, version, objectName, description, language, sourcePackageURL);
    }

}


//Children
export class MessageDataObjectSchema extends DataObjectSchema {
    constructor(guid, type, version, objectName, description, language, sourcePackageURL) {
        super(guid, type, version, objectName, description, language, sourcePackageURL);
    }
}

export class HypertyDataObjectSchema extends DataObjectSchema {
    constructor(guid, type, version, objectName, description, language, sourcePackageURL, accessControlPolicy) {
        super(guid, type, version, objectName, description, language, sourcePackageURL);
        this._accessControlPolicy = accessControlPolicy;
    }
}

//Children
export class CommunicationDataObjectSchema extends HypertyDataObjectSchema {
    constructor(guid, type, version, objectName, description, language, sourcePackageURL, accessControlPolicy) {
        super(guid, type, version, objectName, description, language, sourcePackageURL, accessControlPolicy);
    }
}

export class ConnectionDataObjectSchema extends HypertyDataObjectSchema {
    constructor(guid, type, version, objectName, description, language, sourcePackageURL, accessControlPolicy) {
        super(guid, type, version, objectName, description, language, sourcePackageURL, accessControlPolicy);
    }
}

export class IdentifyDataObjectSchema extends HypertyDataObjectSchema {
    constructor(guid, type, version, objectName, description, language, sourcePackageURL, accessControlPolicy) {
        super(guid, type, version, objectName, description, language, sourcePackageURL, accessControlPolicy);
    }
}

export class ContextDataObjectSchema extends HypertyDataObjectSchema {
    constructor(guid, type, version, objectName, description, language, sourcePackageURL, accessControlPolicy) {
        super(guid, type, version, objectName, description, language, sourcePackageURL, accessControlPolicy);
    }
}

export default DataObjectSchema;
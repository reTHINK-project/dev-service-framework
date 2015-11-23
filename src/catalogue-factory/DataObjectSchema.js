/**
 * Created by pzu on 19.11.15.
 */

import CatalogueDataObject from './CatalogueDataObject';

class DataObjectSchema extends CatalogueDataObject {
    constructor(guid, type, objectName, description, language, sourcePackageURL) {
        super(guid, type, objectName, description, language, sourcePackageURL);
    }

}


//Children
class MessageDataObjectSchema extends DataObjectSchema {
    constructor(guid, type, objectName, description, language, sourcePackageURL) {
        super(guid, type, objectName, description, language, sourcePackageURL);
    }
}

class HypertyDataObjectSchema extends DataObjectSchema {
    constructor(guid, type, objectName, description, language, sourcePackageURL, accessControlPolicy) {
        super(guid, type, objectName, description, language, sourcePackageURL);
        this._accessControlPolicy = accessControlPolicy;
    }
}

//Children
class CommunicationDataObjectSchema extends HypertyDataObjectSchema {
    constructor(guid, type, objectName, description, language, sourcePackageURL, accessControlPolicy) {
        super(guid, type, objectName, description, language, sourcePackageURL, accessControlPolicy);
    }
}

class ConnectionDataObjectSchema extends HypertyDataObjectSchema {
    constructor(guid, type, objectName, description, language, sourcePackageURL, accessControlPolicy) {
        super(guid, type, objectName, description, language, sourcePackageURL, accessControlPolicy);
    }
}

class IdentifyDataObjectSchema extends HypertyDataObjectSchema {
    constructor(guid, type, objectName, description, language, sourcePackageURL, accessControlPolicy) {
        super(guid, type, objectName, description, language, sourcePackageURL, accessControlPolicy);
    }
}

class ContextDataObjectSchema extends HypertyDataObjectSchema {
    constructor(guid, type, objectName, description, language, sourcePackageURL, accessControlPolicy) {
        super(guid, type, objectName, description, language, sourcePackageURL, accessControlPolicy);
    }
}

export default DataObjectSchema;


export default MessageDataObjectSchema;
export default HypertyDataObjectSchema;

export default CommunicationDataObjectSchema;
export default ConnectionDataObjectSchema;
export default IdentifyDataObjectSchema;
export default ContextDataObjectSchema;
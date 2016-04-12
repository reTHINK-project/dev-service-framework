/**
 * Copyright 2016 PT Inovação e Sistemas SA
 * Copyright 2016 INESC-ID
 * Copyright 2016 QUOBIS NETWORKS SL
 * Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
 * Copyright 2016 ORANGE SA
 * Copyright 2016 Deutsche Telekom AG
 * Copyright 2016 Apizee
 * Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

/**
 * @author alice.cheambe[at]fokus.fraunhofer.de
 * The MessageBody class is the base implementation of the Message Body Data Model from which the other body types extend.
 *
 */

export class MessageBody{

    /**
     *
     * @param {Identity.JWT} idToken - token for Identity assertion purpose
     * @param {Identity.JWT} accessToken - token for access control
     * @param {URL.URL} resource - URL of the object
     * @param {URL.HypertyCatalogueURL} schema - URL of the Data object schema stored in the Catalogue
     * @param {Identity.Identity} assertedIdentity - AssertedIdentity is compliant with User Identity Data Model
     *
     */
    constructor(idToken, accessToken, resource, schema, assertedIdentity){

        this.idToken = idToken;
        this.accessToken = accessToken;
        this.resource = resource;
        this.schema = schema;
        this.assertedIdentity = assertedIdentity;
    }

    /**
     * Adds a via URL to the given message body. The "MessageBody.via" attribute contains a list of all Protostub
     * addresses (Protostub) that the message has been passed through. It is used to prevent infinite cycles in the
     * Hyperty Messaging Framework.
     * @param {Identity.JWT} token - identity token to include in the message
     * @return {MessageBody} - the updated message body
     */
    addVia(viaURL){
        if(!viaURL )
            throw  new Error("via URL to be added, must be provided");
        this.via = viaURL;
        return this;
    }

}

/**
 * Class representation of the CreateMessageBody object
 */
export class CreateMessageBody extends MessageBody {

    /**
     *
     * @param {String} value - Contains the created object in JSON format.
     * @param {URL.URL} policy - URL from where access policy control can be downloaded
     * @param {Identity.JWT} idToken -
     * @param {Identity.JWT} accessToken
     * @param {URL.URL} resource - URL of the object
     * @param {URL.HypertyCatalogueURL} schema - URL of the Data object schema stored in the Catalogue
     * @param {Identity.Identity} assertedIdentity - AssertedIdentity is compliant with User Identity Data Model
     */
    constructor(value, policy, idToken, accessToken, resource, schema, assertedIdentity){
        if(!value)
            throw new Error("The value parameter is null");
        super(idToken,accessToken, resource, schema, assertedIdentity, schema, assertedIdentity);

        this.value = value;
        if(policy)
            this.policy = policy;
    }
}

/**
 * Class representation of the ReadMessageBody data object
 */
export class ReadMessageBody extends MessageBody {
    /**
     *
     * @param {Identity.JWT} idToken -
     * @param {Identity.JWT} accessToken
     * @param {URL.URL} resource - URL of the objec
     * @param {URL.HypertyCatalogueURL} schema - URL of the Data object schema stored in the Catalogue
     * @param {Identity.Identity} assertedIdentity - AssertedIdentity is compliant with User Identity Data Model
     * @param {String} attribute - Identifies the attribute in the Object to be read (optional)
     * @param {String} criteriaSyntax - Defines the criteria syntax used in criteria field. To be used for search purposes.
     * Valid criteria Syntax are: "key-value", "mongodb", "sql"(?), ...
     * @param {String} criteria -Defines the criteria to be used for search purposes. Syntax used to define the criteria
     * is set in the criteriaSyntax.
     */
    constructor( idToken, accessToken, resource, schema, assertedIdentity, attribute, criteriaSyntax, criteria){

        super(idToken,accessToken ,resource, schema, assertedIdentity );

        if(attribute)
            this.attribute = attribute;

        if(criteriaSyntax)
            this.criteriaSyntax = criteriaSyntax;

        if(criteria)
            this.criteria = criteria;
    }
}


/**
 * Class representation of the DeleteMessageBody data object
 */
export class DeleteMessageBody extends MessageBody {
    /**
     *
     * @param {Identity.JWT} idToken -
     * @param {Identity.JWT} accessToken
     * @param {URL.URLList} resource - One or more URLs of objects to be deleted
     * @param {URL.HypertyCatalogueURL} schema - URL of the Data object schema stored in the Catalogue
     * @param {Identity.Identity} assertedIdentity - AssertedIdentity is compliant with User Identity Data Model
     * @param {String} attribute - Identifies the attribute in the Object to be deleted (optional)
     */
    constructor(idToken, accessToken, resource, schema, assertedIdentity,attribute ){

        if (typeof resource === Array || resource instanceof Array) {
            super(idToken, accessToken , null, schema, assertedIdentity);
            this.childrenResources = resource;
        } else {
            super(idToken, accessToken ,resource, schema, assertedIdentity);
        }

        if(attribute){
            this.attribute = attribute;
        }
    }

}

/**
 * Class representation of the UpdateMessageBody data object
 */
export class UpdateMessageBody extends MessageBody {
    /**
     * Constructor to create the object
     * @param {Identity.JWT} idToken -
     * @param {Identity.JWT} accessToken
     * @param {URL.URL} resource - URL of the object
     * @param {URL.HypertyCatalogueURL} schema - URL of the Data object schema stored in the Catalogue
     * @param {Identity.Identity} assertedIdentity - AssertedIdentity is compliant with User Identity Data Model
     * @param {String} attribute - Identifies the attribute in the Object to be updated (optional)
     * @param {String} value - Contains the updated value object in JSON format.
     */
    constructor(idToken, accessToken, resource, schema, assertedIdentity, attribute, value){

        super(idToken,accessToken ,resource, schema, assertedIdentity );
        this.attribute = attribute;
        this.value = value;
    }

    addAttributeType(attributeType){
        if(attributeType)
            this.attributeType = attributeType;
    }

    addOperation(operation)
    {
        if(operation)
            this.operation = operation;
    }
}

/**
 * Class representation of the ForwardMessageBody data object
 */
export class ForwardMessageBody extends MessageBody {
    /**
     * Constructor to create the object
     *
     * @param {Identity.JWT} idToken -
     * @param {Identity.JWT} accessToken
     * @param {URL.URL} resource - URL of the object
     * @param {URL.HypertyCatalogueURL} schema - URL of the Data object schema stored in the Catalogue
     * @param {Identity.Identity} assertedIdentity - AssertedIdentity is compliant with User Identity Data Model
     * @param {Message} message - Message to be forwarded
     */
    constructor(idToken, accessToken, resource, schema, assertedIdentity, message){


        super(idToken,accessToken ,resource, schema, assertedIdentity );

        this.message = message;
    }
}

/**
 * Class representation of the ResponseMessageBody data object
 */
export class ResponseMessageBody extends MessageBody {

    /**
     * Constructor to create the object
     *
     * @param {Identity.JWT} idToken -
     * @param {Identity.JWT} accessToken
     * @param {URL.URL} resource - URL of the object
     * @param code - A response code compliant with HTTP response codes (RFC7231)
     * @param value - Contains a data value in JSON format. Applicable to Responses to READ MessageType.
     */
    constructor(idToken, accessToken, resource, code, value){

        super(idToken, accessToken ,resource );

        if(code)
        {
            this.code = code;
            this.description = REASON_PHRASE[code];
        }
        if(value)
            this.value = value;

    }
}

/**
 * Class representation of the ExecuteMessageBoday data Object. Contains the name of method to be invoked and an array
 * and an Array of objects to be passed as parameters to the defined method. This is compliant with JSON-RPC Spec.
 */
export class ExecuteMessageBody extends MessageBody {

    /**
     * Constructor to create the object
     *
     * @param {Identity.JWT} idToken -
     * @param {Identity.JWT} accessToken
     * @param {URL.URL} resource - URL of the object
     * @param {URL.HypertyCatalogueURL} schema - URL of the Data object schema stored in the Catalogue
     * @param {Identity.Identity} assertedIdentity - AssertedIdentity is compliant with User Identity Data Model
     * @param {Message} message - Message to be forwarded
     */
    constructor(idToken, accessToken, resource, schema, assertedIdentity, method, params){


        super(idToken,accessToken ,resource, schema, assertedIdentity );

        this.method = method;
        this.params = params;
    }

}

export function Enum(a){
    let i = Object
        .keys(a)
        .reduce((o,k)=>(o[a[k]]=k,o),{});

    return Object.freeze(
        Object.keys(a).reduce(
            (o,k)=>(o[k]=a[k],o), v=>i[v]
        )
    );
}

/**
 * Represents response code compliant with HTTP response codes (RFC7231).
 */
export const RESPONSE_CODE = Enum({
    100: '100',
    101: '101',
    200: '200',
    201: '201',
    202: '202',
    203: '203',
    204: '204',
    205: '205',
    206: '206',
    300: '300',
    301: '301',
    302: '302',
    303: '303',
    304: '304',
    305: '305',
    307: '307',
    400: '400',
    401: '401',
    402: '402',
    403: '403',
    404: '404',
    405: '405',
    406: '406',
    407: '407',
    408: '408',
    409: '409',
    410: '410',
    411: '411',
    412: '412',
    413: '413',
    414: '414',
    415: '415',
    416: '416',
    417: '417',
    426: '426',
    500: '500',
    501: '501',
    502: '502',
    503: '503',
    504: '504',
    505: '505'
});

/**
 * Represents response phrases to response code compliant with HTTP response codes (RFC7231).
 */
export const REASON_PHRASE = Enum({
    100: 'Continue',
    101: 'Switching Protocols',
    200: 'OK',
    201: 'Created',
    202: 'Accepted',
    203: 'Non-Authoritative Information',
    204: 'No Content',
    205: 'Reset Content',
    206: 'Partial Content',
    300: 'Multiple Choices',
    301: 'Moved Permanently',
    302: 'Found',
    303: 'See Other',
    304: 'Not Modified',
    305: 'Use Proxy',
    307: 'Temporary Redirect',
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Payload Too Large',
    414: 'Request-URI Too Long',
    415: 'Unsupported Media Type',
    416: 'Range Not Satisfiable',
    417: 'Expectation Failed',
    426: 'Upgrade Required',
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Time-out',
    505: 'HTTP Version Not Supported'
});


export const ATTRIBUTE_TYPE = Enum({
    OBJECT: 'OBJECT',
    ARRAY: 'ARRAY'
});

export const UPDATE_OPERATION = Enum({
    ADD: 'ADD',
    REMOVE: 'REMOVE'
});

export default MessageBody;

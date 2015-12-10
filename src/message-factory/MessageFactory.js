/**
* Message Factory
* 
*/

import RethinkObject from '../reTHINKObject/RethinkObject.js';
import Message from './Message.js';
import {CreateMessageBody, DeleteMessageBody, UpdateMessageBody, ReadMessageBody, ResponseMessageBody,
    ForwardMessageBody, REASON_PHRASE} from './MessageBody.js';
import {MessageType} from './Message.js';


class MessageFactory extends RethinkObject {

    /**
     * Constructor
     * @param {boolean} validation
     * @param {URL.URL } schema - link to the schema
     */
    constructor(validation, schema){
        super(validation,schema);

        let _this = this;
		
	}

    validate(data){
        return super.validate(data);

    }

    /**
     * Create a Message with CREATE MessageType and Create Message Body
     *
     * @param {URL.URL} from - the sender of this message
     * @param {URL.URLList} One or more URLs of Message recipients. According to the URL scheme it may be handled in
     * different ways
     * @param {Object} contextId - the GUID used to identity eg a communication session like a telephony call
     * @param {Identity.JWT} idToken - token for Identity assertion purpose
     * @param {Identity.JWT} accessToken - access token for access control purposes
     * @param {URL.URl} resource - URL of Data Object Resource associated with the message
     * @param {string} signature -
     * @param {string} value - the created object in JSON format
     * @param {URL.URL} policy - URL from where access policy control can be downloaded
     *
     * @return {Message} Create Message
     */
	createMessageRequest(from, to, contextId, idToken, accessToken, resource, signature, schema,assertedIdentity,
                         value, policy) {
        if(typeof from === 'undefined' || typeof contextId === 'undefined'
        || typeof value === 'undefined')
            throw  new Error("from, contextId, and value of object to be created MUST be specified");

        let messageBody = new CreateMessageBody(value, policy, idToken, accessToken, resource, schema, assertedIdentity);
        let message = new Message(MessageFactory._generateMessageId(), from, to, MessageType.CREATE, contextId,
            messageBody, signature);
        return message;
	}

    createForwardMessageRequest(data, from, to, contextId, idToken, accessToken, resource,
        signature, schema, assertedIdentity) {
        if(typeof from === 'undefined' || typeof contextId === 'undefined'
            || typeof data === 'undefined')
            throw  new Error("from, contextId, and message to forward MUST be specified");

        let messageBody = new ForwardMessageBody(idToken, accessToken, resource, schema, assertedIdentity, data);
        let message = new Message(MessageFactory._generateMessageId(), from, to, MessageType.FORWARD, contextId,
            messageBody, signature);
        return message;
    }


    /**
     *  Create Delete Message
     * @param {URL.URL} from - the sender of this message
     * @param {URL.URLList} to - One or more URLs of Message recipients. According to the URL scheme it may be handled in
     * different ways
     * @param {Object} contextId - the GUID used to identity eg a communication session like a telephony call
     * @param {Identity.JWT} idToken - token for Identity assertion purpose
     * @param {Identity.JWT} accessToken - access token for access control purposes
     * @param {URL.URl} resource - URL of Data Object Resource associated with the message
     * @param {string} signature -
     * @param attribute - Identifies the attribute in the Object to be deleted
     * @param schema
     * @param assertedIdentity - user identity
     * @return Delete Message
     */
    createDeleteMessageRequest(from, to, contextId, idToken, accessToken, resource, signature, attribute,
                               schema, assertedIdentity){
        if(typeof from === 'undefined' || typeof contextId === 'undefined')
            throw  new Error("from, contextId, and value of object to be created MUST be specified");
        let messageBody = new DeleteMessageBody(idToken, accessToken, resource, attribute, schema, assertedIdentity);
        let message  = new Message(MessageFactory._generateMessageId(), from, to, MessageType.DELETE, contextId,
            messageBody, signature);
        return message;

    }

    /**
     * Creates an Update Message Request
     * @param {URL.URL} from - the sender of this message
     * @param {URL.URLList} One or more URLs of Message recipients. According to the URL scheme it may be handled in
     * different ways
     * @param {Object} contextId - the GUID used to identity eg a communication session like a telephony call
     * @param {Identity.JWT} idToken - token for Identity assertion purpose
     * @param {Identity.JWT} accessToken - access token for access control purposes
     * @param {URL.URl} resource - URL of Data Object Resource associated with the message
     * @param {string} signature -
     * @param attribute - Identifies the attribute in the Object to be updated
     * @param value - The new value of the attribute to be updated
     */
    createUpdateMessageRequest(from, to, contextId, idToken, accessToken, resource, signature, schema,
                               assertedIdentity, attribute,  value){
        if(typeof from === 'undefined' || typeof contextId === 'undefined')
            throw  new Error("from, and contextId MUST be specified");
        let messageBody = new UpdateMessageBody(idToken, accessToken, resource, schema, assertedIdentity, attribute,
            value);
        let message  = new Message(MessageFactory._generateMessageId(), from, to, MessageType.UPDATE, contextId,
            messageBody, signature);
        return message;
    }

    /**
     *
     * @param {URL.URL} from - the sender of this message
     * @param {URL.URLList} One or more URLs of Message recipients. According to the URL scheme it may be handled in
     * different ways
     * @param {Object} contextId - the GUID used to identity eg a communication session like a telephony call
     * @param {Identity.JWT} idToken - token for Identity assertion purpose
     * @param {Identity.JWT} accessToken - access token for access control purposes
     * @param {URL.URl} resource - URL of Data Object Resource associated with the message
     * @param {string} signature -
     * @param schema -
     * @param assertedIdentity - the user identity
     * @param attribute - Identifies the attribute in the Object to be read
     * @param criteriaSyntax -
     * @param criteria -
     */
    createReadMessageRequest(from, to, contextId, idToken, accessToken, resource, signature,
                            schema, assertedIdentity,  attribute, criteriaSyntax, criteria){
        if(typeof from === 'undefined' || typeof contextId === 'undefined')
            throw  new Error("from, and contextId MUST be specified");
        let messageBody = new ReadMessageBody(idToken, accessToken, resource, schema, assertedIdentity, attribute,
            criteriaSyntax, criteria);
        let message  = new Message(MessageFactory._generateMessageId(), from, to, MessageType.UPDATE, contextId,
            messageBody, signature);
        return message;
    }

    /**
     *
     * @param {URL.URL} from - the sender of this message
     * @param {URL.URLList} One or more URLs of Message recipients. According to the URL scheme it may be handled in
     * different ways
     * @param {Object} contextId - the GUID used to identity eg a communication session like a telephony call
     * @param {Identity.JWT} idToken - token for Identity assertion purpose
     * @param {Identity.JWT} accessToken - access token for access control purposes
     * @param {URL.URl} resource - URL of Data Object Resource associated with the message
     * @param {string} signature -
     * @param schema -
     * @param assertedIdentity - the user's identity
     * @param code - response code compliant with HTTP response codes (RFC7231).
     * @param value - Contains a data value in JSON format.
     */
    createMessageResponse(from, to, contextId, idToken, accessToken, resource, signature, schema,
                          assertedIdentity, code, value){
        if(typeof from === 'undefined' || typeof contextId === 'undefined' || typeof code === 'undefined')
            throw  new Error("from, contextId, and response Code MUST be specified");
        let response = new ResponseMessageBody(idToken, accessToken, resource, code, value);
        return new Message(MessageFactory._generateMessageId(), from, to, MessageType.RESPONSE, contextId, response,
            signature);
    }

    /**
     * Generate a Delete Message Body to the given Message
     * @param {Message} data - the input Message
     * @param {string} attribute - the attribute to be deleted
     * @return {Message} Delete Message
     */
    generateDeleteMessageBody(data, attribute){
		if(typeof data === 'undefined' || typeof attribute === 'undefined')
            throw  new Error("message and attribute MUST be specified");
        let previousBody = data.body;
        let idToken = previousBody.idToken;
        let accessToken = previousBody.accessToken;
        let resource = previousBody.resource;
        let schema = previousBody.schema;
        let assertedIdentity = previousBody.assertedIdentity;

        let newBody = new DeleteMessageBody(idToken, accessToken, resource, attribute, schema, assertedIdentity);
        return new Message(data.id, data.from, data.to, MessageType.DELETE, data.contextId, newBody, data.signature);
	}

    /**
     * Generate an Update Message Body to the given Message
     * @param {Message} data - Message to be updated
     * @param {string} attribute to be updated
     * @param {object} value the new value of the attribute
     * @return {Message} Update Message
     */
	generateUpdateMessageBody(data,  attribute,  value){
        if(!data || !attribute || !value)
            throw  new Error("message attribute and value MUST be specified");
        let previousBody = data.body;
        let idToken = previousBody.idToken;
        let accessToken = previousBody.accessToken;
        let resource = previousBody.resource;
        let schema = previousBody.schema;
        let assertedIdentity = previousBody.assertedIdentity;

        let newBody = new UpdateMessageBody(idToken, accessToken, resource, schema, assertedIdentity, attribute, value);
        return new Message(data.id, data.from, data.to, MessageType.UPDATE, data.contextId, newBody, data.signature);
	}

    /**
     * generate a Read Message Body to given request
     * @param {Message} data - Message to be updated
     * @param {Object} attribute - Identifies the attribute in the Object to be read
     * @param {Object} criteria
     * @param {Object} criteriaSyntax
     */
    generateReadMessageBody( data,  attribute,  criteria,  criteriaSyntax){
        if (!data )
            throw new Error("message MUST be specified");
        let previousBody = data.body;
        let idToken = previousBody.idToken;
        let accessToken = previousBody.accessToken;
        let resource = previousBody.resource;
        let schema = previousBody.schema;
        let assertedIdentity = previousBody.assertedIdentity;

        let readBody = new ReadMessageBody(idToken, accessToken, resource, schema, assertedIdentity, attribute,
            criteriaSyntax, criteria);
        return new Message(data.id, data.from, data.to, MessageType.READ, data.contextId, readBody, data.signature);
    }


    /**
     * Generate a response to the given Message
     * @param {Message} data - Message to be updated
     * @param code - response code compliant with HTTP response codes (RFC7231).
     * @param value - Contains a data value in JSON format.
     */
	generateMessageResponse( data,  code, value) {
        if (!data || !code)
            throw new Error("message and response code MUST be specified");

        let previousBody = data.body;
        let idToken = previousBody.idToken;
        let accessToken = previousBody.accessToken;
        let resource = previousBody.resource;

        let response = new ResponseMessageBody(idToken,accessToken, resource, code, value);
        return new Message(data.id, data.from, data.to, MessageType.RESPONSE, data.contextId, response, data.signature);
    }



    static _generateMessageId() {
        let d = new Date().getTime();

        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
}

export default MessageFactory;

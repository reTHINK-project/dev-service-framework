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

    //var transId = 1;
    /**
     * Constructor
     * @param {boolean} validation
     * @param {URL.URL } schema - link to the schema
     */
    constructor(validation, schema){
        super(validation,schema);

        let _this = this;
        this.myGenerator = new IdGenerator().idMaker();

    }

    validate(data){
        return super.validate(data);

    }

    get transId(){ return this._transId; }

    /**
     * Create a Message with CREATE MessageType and Create Message Body
     *
     * @param {URL.URL} from - the sender of this message
     * @param {URL.URLList} One or more URLs of Message recipients. According to the URL scheme it may be handled in
     * different ways
     * @param {Identity.JWT} idToken - token for Identity assertion purpose
     * @param {Identity.JWT} accessToken - access token for access control purposes
     * @param {URL.URl} resource - URL of Data Object Resource associated with the message
     * @param {string} value - the created object in JSON format
     * @param {URL.URL} policy - URL from where access policy control can be downloaded
     *
     * @return {Message} Create Message
     */
	createMessageRequest(from, to, idToken, accessToken, resource, schema,assertedIdentity,
                         value, policy) {
        if(!from || !to || !value)
            throw  new Error("from, to, and value of object to be created MUST be specified");

        let id = this.myGenerator.next().value;
        let messageBody = new CreateMessageBody(value, policy, idToken, accessToken, resource, schema, assertedIdentity);
        let message = new Message(id, from, to, MessageType.CREATE, messageBody);
        return message;
	}

    createForwardMessageRequest(data, from, to, idToken, accessToken, resource, schema, assertedIdentity) {
        if(!from || !to || !data)
            throw  new Error("from, to, and message to forward MUST be specified");

        let id = this.myGenerator.next().value;
        let messageBody = new ForwardMessageBody(idToken, accessToken, resource, schema, assertedIdentity, data);
        let message = new Message(id , from, to, MessageType.FORWARD, messageBody);
        return message;
    }


    /**
     *  Create Delete Message
     * @param {URL.URL} from - the sender of this message
     * @param {URL.URLList} to - One or more URLs of Message recipients. According to the URL scheme it may be handled in
     * different ways
     * @param {Identity.JWT} idToken - token for Identity assertion purpose
     * @param {Identity.JWT} accessToken - access token for access control purposes
     * @param {URL.URl} resource - URL of Data Object Resource associated with the message
     * @param attribute - Identifies the attribute in the Object to be deleted
     * @param schema
     * @param assertedIdentity - user identity
     * @return Delete Message
     */
    createDeleteMessageRequest(from, to, idToken, accessToken, resource, attribute,
                               schema, assertedIdentity){
        if(!from || !to)
            throw  new Error("from and to parameters MUST be specified");

        let id = this.myGenerator.next().value;
        let messageBody = new DeleteMessageBody(idToken, accessToken, resource, attribute, schema, assertedIdentity);
        let message  = new Message(id, from, to, MessageType.DELETE, messageBody);
        return message;

    }

    /**
     * Creates an Update Message Request
     *
     * @param {URL.URL} from - the sender of this message
     * @param {URL.URLList} One or more URLs of Message recipients. According to the URL scheme it may be handled in
     * different ways
     * @param {Identity.JWT} idToken - token for Identity assertion purpose
     * @param {Identity.JWT} accessToken - access token for access control purposes
     * @param {URL.URl} resource - URL of Data Object Resource associated with the message
     * @param {string} signature -
     * @param attribute - Identifies the attribute in the Object to be updated
     * @param value - The new value of the attribute to be updated
     */
    createUpdateMessageRequest(from, to, idToken, accessToken, resource, schema,assertedIdentity, attribute,  value){
        if(!from || !to || !value)
            throw  new Error("from, and to and value MUST be specified");

        let id = this.myGenerator.next().value;
        let messageBody = new UpdateMessageBody(idToken, accessToken, resource, schema, assertedIdentity, attribute,
            value);
        let message  = new Message(id, from, to, MessageType.UPDATE, messageBody);
        return message;
    }

    /**
     *
     * @param {URL.URL} from - the sender of this message
     * @param {URL.URLList} One or more URLs of Message recipients. According to the URL scheme it may be handled in
     * different ways
     * @param {Identity.JWT} idToken - token for Identity assertion purpose
     * @param {Identity.JWT} accessToken - access token for access control purposes
     * @param {URL.URl} resource - URL of Data Object Resource associated with the message
     * @param schema -
     * @param assertedIdentity - the user identity
     * @param attribute - Identifies the attribute in the Object to be read
     * @param criteriaSyntax -
     * @param criteria -
     */
    createReadMessageRequest(from, to, idToken, accessToken, resource, schema, assertedIdentity,  attribute, criteriaSyntax, criteria){
        if(!from || !to)
            throw  new Error("from, and to MUST be specified");

        let id = this.myGenerator.next().value;
        let messageBody = new ReadMessageBody(idToken, accessToken, resource, schema, assertedIdentity, attribute,
            criteriaSyntax, criteria);
        let message  = new Message(id, from, to, MessageType.READ, messageBody);
        return message;
    }

    /**
     *
     * @param {URL.URL} from - the sender of this message
     * @param {URL.URLList} One or more URLs of Message recipients. According to the URL scheme it may be handled in
     * different ways
     * @param {Identity.JWT} idToken - token for Identity assertion purpose
     * @param {Identity.JWT} accessToken - access token for access control purposes
     * @param {URL.URl} resource - URL of Data Object Resource associated with the message
     * @param schema -
     * @param assertedIdentity - the user's identity
     * @param code - response code compliant with HTTP response codes (RFC7231).
     * @param value - Contains a data value in JSON format.
     */
    createMessageResponse(from, to, idToken, accessToken, resource, schema, assertedIdentity, code, value){
        if(!from || !to || !code)
            throw  new Error("from, to, and response Code MUST be specified");
        let id = this.myGenerator.next().value;
        let response = new ResponseMessageBody(idToken, accessToken, resource, code, value);
        return new Message(id, from, to, MessageType.RESPONSE, response);
    }

    /**
     * Generate a Delete Message Body to the given Message
     * @param {Message} data - the input Message
     * @param {string} attribute - the attribute to be deleted
     * @return {Message} Delete Message
     */
    generateDeleteMessageBody(data, attribute){
		if(!data || !attribute)
            throw  new Error("message and attribute MUST be specified");
        let previousBody = data.body;
        let idToken = previousBody.idToken;
        let accessToken = previousBody.accessToken;
        let resource = previousBody.resource;
        let schema = previousBody.schema;
        let assertedIdentity = previousBody.assertedIdentity;

        let newBody = new DeleteMessageBody(idToken, accessToken, resource, attribute, schema, assertedIdentity);
        let id = this.myGenerator.next().value;
        return new Message(id, data.from, data.to, MessageType.DELETE, newBody);
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
        let id = this.myGenerator.next().value;
        return new Message(id, data.from, data.to, MessageType.UPDATE, newBody);
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
        let id = this.myGenerator.next().value;
        return new Message(id, data.from, data.to, MessageType.READ, readBody);
    }


    /**
     * Generate a response to the given Message
     * Request - Response transactions
     * A Response to a Request message should follow this rule:
     * Response.from = Request.to
     * Response.to = Request.from
     * Response.id = Request.id
     * It should be note, the Request.id MUST be incremented every time a new Request message is created.
     *
     * @param {Message} data - Message to be updated
     * @param code - response code compliant with HTTP response codes (RFC7231).
     * @param value - Contains a data value in JSON format.
     *
      */
	generateMessageResponse( data,  code, value) {
        if (!data || !code)
            throw new Error("message and response code MUST be specified");

        let previousBody = data.body;
        let idToken = previousBody.idToken;
        let accessToken = previousBody.accessToken;
        let resource = previousBody.resource;

        let response = new ResponseMessageBody(idToken,accessToken, resource, code, value);
        let id = this.myGenerator.next().value;
        return new Message(id, data.to, data.from, MessageType.RESPONSE, response);
    }

    /*generateMessageId() {
        let d = new Date().getTime();

        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });

    }*/
}

export class IdGenerator {
    *idMaker(){
        let index = 1;
        while(index < 10000)
            yield index++;

    }
}

export default MessageFactory;

/**
* Message Factory
* 
*/
import rethinkObject from '../reTHINKObject/RethinkObject.js';
import Message from './Message.js';
import {CreateMessageBody, DeleteMessageBody, UpdateMessageBody, ReadMessageBody, ResponseMessageBody, REASON_PHRASE} from './MessageBody.js';
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
     * Create a Message with CREATE MessageType and Create Mesage Body
     *
     * @param {URL.URL} from - the sender of this message
     * @param {URL.URLList} One or more URLs of Message recipients. According to the URL scheme it may be handled in different ways
     * @param {Object} contextId - the GUID used to identity eg a communication session like a telephony call
     * @param {string} value - the created object in JSON format
     * @param {URL.URL} policy - URL from where access policy control can be downloaded
     * @param {Identity.JWT} idToken - token for Identity assertion purpose
     * @param {Identity.JWT} accessToken - access token for access control purposes
     * @param {URL.URl} resource - URL of Data Object Resource associated with the message
     * @param {string} signature -
     * @return {Message} Create Message
     */
	createMessageRequest(from, to, contextId, value, policy, idToken, accessToken, resource, signature)
	{
        if(typeof from === 'undefined' || typeof contextId === 'undefined'
        || typeof value === 'undefined')
            throw  new Error("from, contextId, and value of object to be created MUST be specified");

        let messageBody = new CreateMessageBody(value, policy, idToken, accessToken, resource);
        let message = new Message(MessageFactory.generateGUID(), from, to, MessageType.CREATE, contextId, messageBody, signature);
        return message;
	}

    /**
     * Create a Delete Message Request from given Message
     * @param {Message} data - the input Message
     * @param {string} attribute - the attribute to be deleted
     * @return {Message} Delete Message
     */
    createDeleteMessageRequest(data, attribute){
		if(typeof data === 'undefined' || typeof attribute === 'undefined')
            throw  new Error("message and attribute MUST be specified");
        let newBody = new DeleteMessageBody(data, attribute);
        return new Message(data.id, data.from, data.to, MessageType.DELETE, data.contextId, newBody, data.signature);
	}

    /**
     * Creates an Update Message Request from the given Message
     * @param {Message} data
     * @param {string} attribute to be updated
     * @param {object} value the new value of the attribute
     * @return {Message} Update Message
     */
	createUpdateMessageRequest(data,  attribute,  value){
        if(!data || !attribute || !value)
            throw  new Error("message attribute and value MUST be specified");
        let newBody = new UpdateMessageBody(data, attribute, value);
        return new Message(data.id, data.from, data.to, MessageType.UPDATE, data.contextId, newBody, data.signature);
	}

    /**
     * Creates a Read Message request
     * @param {Message} data
     * @param {Object} attribute
     * @param {Object} criteria
     * @param {Object} criteriaSyntax
     */
    createReadMessageRequest( data,  attribute,  criteria,  criteriaSyntax){

        let newBody = new ReadMessageBody(data, attribute, criteriaSyntax, criteria);
        return new Message(data.id, data.from, data.to, MessageType.READ, data.contextId, newBody, data.signature);
    }
	
	createResponse( data,  code, value) {
        if (!data || !code)
            throw new Error("message and response code MUST be specified");
        let response = new ResponseMessageBody(data, code, value);
        return new Message(data.id, data.from, data.to, MessageType.RESPONSE, data.contextId, response, data.signature);
    }



    static generateGUID() {
        let d = new Date().getTime();

        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
}

export default MessageFactory;
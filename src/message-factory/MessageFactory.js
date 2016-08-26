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
import Message, {MessageType} from "./Message.js";
import {
    MessageBody,
    CreateMessageBody,
    DeleteMessageBody,
    UpdateMessageBody,
    ReadMessageBody,
    ResponseMessageBody,
    ForwardMessageBody,
    ExecuteMessageBody
} from "./MessageBody.js";

/**
 * @author alice.cheambe[at]fokus.fraunhofer.de
 * The MessageFactory creates messages according to the reTHINK Message Data Model to be sent through the Runtime
 * Message Bus.
 */
class MessageFactory {

    /**
     * Constructor to be used to instantiate an object of the Message Factory
     */
    constructor() {
        this.myGenerator = new IdGenerator().idMaker();
    }

    /**
     * Creates a Message of TYPE CREATE and Create Message Body
     *
     * @param {URL.URL} from - the sender of this message
     * @param {URL.URLList} to-  One or more URLs of Message recipients. According to the URL scheme it may be handled
     * in different ways
     * @param {String} value - Contains the created object in JSON format
     * @param {URL.URL} policy - the sender of this message
     */
    createCreateMessageRequest(from, to, value, policy) {
        if (!from || !to || !value)
            throw  new Error("from, to, and value of object to be created MUST be specified");

        let id = this.myGenerator.next().value;
        let messageBody = new CreateMessageBody(value, policy, undefined, undefined, undefined, undefined, undefined);
        let message = new Message(id, from, to, MessageType.CREATE, messageBody);
        return message;
    }

    /**
     * Creates a Message of TYPE FORWARD and Forward Message Body, which contains the message to be forwarded
     *
     * @param {URL.URL} from - the sender of this message
     * @param {URL.URLList} to-  One or more URLs of Message recipients. According to the URL scheme it may be handled
     * in different ways
     * @param message {Message.Message} message - the message to be forwarded
     * @return {Message.Message} Message - the Forward Message Request
     */
    createForwardMessageRequest(from, to, message) {
        if (!from || !to || !message)
            throw  new Error("from, to, and message to forward MUST be specified");

        let id = this.myGenerator.next().value;
        let messageBody = new ForwardMessageBody(undefined, undefined, undefined, undefined, undefined, message);
        let forwardMessage = new Message(id, from, to, MessageType.FORWARD, messageBody);
        return forwardMessage;
    }

    /**
     *  Create Delete Message of Type DELETE and delete message body
     *
     * @param {URL.URL} from - the sender of this message
     * @param {URL.URLList} to - One or more URLs of Message recipients. According to the URL scheme it may be handled
     * in different ways
     * @param {URL.URl} resource - URL of Data Object Resource associated with the message
     * @param attribute - Identifies the attribute in the Object to be deleted
     * @return {Message.Message} Message - the Delete Message Request
     */
    createDeleteMessageRequest(from, to, resource, attribute) {
        if (!from || !to)
            throw  new Error("from and to parameters MUST be specified");

        let id = this.myGenerator.next().value;
        let messageBody = new DeleteMessageBody(undefined, undefined, resource, attribute, undefined, undefined);
        let message = new Message(id, from, to, MessageType.DELETE, messageBody);
        return message;

    }

    /**
     * Creates an Update Message Request
     *
     * @param {URL.URL} from - the sender of this message
     * @param {URL.URLList}to - One or more URLs of Message recipients. According to the URL scheme it may be handled in
     * different ways
     * @param value - The new value of the attribute to be updated
     * @param {URL.URL} resource - URL of Data Object Resource associated with the message
     * @param attribute - Identifies the attribute in the Object to be updated
     * @return {Message.Message} Message - the Update message request
     */
    createUpdateMessageRequest(from, to, value, resource, attribute) {
        if (!from || !to || !value)
            throw  new Error("from, and to and value MUST be specified");

        let id = this.myGenerator.next().value;
        let messageBody = new UpdateMessageBody(undefined, undefined, resource, undefined, undefined, attribute, value);
        let message = new Message(id, from, to, MessageType.UPDATE, messageBody);
        return message;
    }

    /**
     * Creates a Message of type READ
     * @param {URL.URL} from - the sender of this message
     * @param {URL.URLList} to- One or more URLs of Message recipients. According to the URL scheme it may be handled in
     * different ways
     * @param {URL.URl} resource - URL of Data Object Resource associated with the message
     * @param attribute - Identifies the attribute in the Object to be read
     * @return {Message.Message} Message - the Read message request
     */
    createReadMessageRequest(from, to, resource, attribute) {
        if (!from || !to || !resource)
            throw  new Error("from, to and the resource to read from MUST be specified");

        let id = this.myGenerator.next().value;
        let messageBody = new ReadMessageBody(undefined, undefined, resource, undefined, undefined, attribute,
            undefined, undefined);
        let message = new Message(id, from, to, MessageType.READ, messageBody);
        return message;
    }

    /**
     * Creates a Message of type SUBSCRIBE
     * @param {URL.URL} from - the sender of this message
     * @param {URL.URLList} to- One or more URLs of Message recipients. According to the URL scheme it may be handled in
     * different ways
     * @param {URL.URL} resource - URL of the object
     */
    createSubscribeMessageRequest(from, to, resource) {
        if (!from || !to || !resource)
            throw  new Error("from, to and the resource to subscribe to MUST be specified");

        let id = this.myGenerator.next().value;
        let messageBody = new MessageBody(undefined, undefined, resource, undefined, undefined);
        let message = new Message(id, from, to, MessageType.SUBSCRIBE, messageBody);
        return message;
    }

    /**
     * Creates a Message of type UNSUBSCRIBE
     * @param {URL.URL} from - the sender of this message
     * @param {URL.URLList} to- One or more URLs of Message recipients. According to the URL scheme it may be handled in
     * different ways
     * @param {URL.URL} resource - URL of the object
     */
    createUnsubscribeMessageRequest(from, to, resource) {
        if (!from || !to || !resource)
            throw  new Error("from, to and the resource to subscribe to MUST be specified");

        let id = this.myGenerator.next().value;
        let messageBody = new MessageBody(undefined, undefined, resource, undefined, undefined);
        let message = new Message(id, from, to, MessageType.UNSUBSCRIBE, messageBody);
        return message;
    }

    /**
     * Creates a Message of type EXECUTE
     * @param {URL.URL} from - the sender of this message
     * @param {URL.URLList} to- One or more URLs of Message recipients. According to the URL scheme it may be handled in
     * different ways
     * @param {string} method -
     * @param {Array} params -
     */
    createExecuteMessageRequest(from, to, method, params) {
        if (!from || !to || !method)
            throw  new Error("from, to and the method to execute MUST be specified");

        let id = this.myGenerator.next().value;
        let messageBody = new ExecuteMessageBody(undefined, undefined, undefined, undefined, undefined, method, params)
        let executeMessage = new Message(id, from, to, MessageType.EXECUTE, messageBody);
        return executeMessage;
    }


    /**
     * Creates the response to the Message
     * @param message - the message request from which the response should be generated
     * @param code - the response code compliant with HTTP response codes (RFC7231).
     * @param value - contains a data value in JSON format. Applicable to Responses to READ MessageType.
     * @param source - Contains the original creator of the response. Useful to identify the real source of the
     * response to a one-to-many message delivery ie multiple responses coming coming from different sources.
     */
    createMessageResponse(message, code, value, source) {
        if (!code)
            throw  new Error("response Code MUST be specified");
        let response = new ResponseMessageBody(undefined, undefined, undefined, code, value, source);
        return new Message(message.id, message.to, message.from, MessageType.RESPONSE, response);
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
     * @param {ResponseCode} code - response code compliant with HTTP response codes (RFC7231).
     * @param {String} value - Contains a data value in JSON format.
     *
     */
    generateMessageResponse(data, code, value) {
        if (!data || !code)
            throw new Error("message and response code MUST be specified");

        let previousBody = data.body;
        let idToken = previousBody.idToken;
        let accessToken = previousBody.accessToken;
        let resource = previousBody.resource;

        let response = new ResponseMessageBody(idToken, accessToken, resource, code, value);
        let id = this.myGenerator.next().value;
        return new Message(id, data.to, data.from, MessageType.RESPONSE, response);
    }

}

/**
 * Message Identifier Generator that generates the id used to identifier message transactions
 */
export class IdGenerator {
    *idMaker() {
        let index = 1;
        while (index < 1000000)
            yield index++;
    }
}

export default MessageFactory;

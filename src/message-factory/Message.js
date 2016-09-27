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
import RethinkObject from "../reTHINKObject/RethinkObject.js";

/**
 *
 * @author alice.cheambe[at]fokus.fraunhofer.de
 * The Message class is the representation of the reTHINK Message Data Model
 *
 */
export class Message extends RethinkObject {

    /**
     * Generates a message data object
     *
     * @param {number} id - To be used to associate Response messages to the initial request message.
     * @param {URL.URL} from - URL of Hyperty instance or User associated with it
     * @param {URL.URLList} toList - One or more URLs of Message recipients. According to the URL scheme it may be
     * handled in different ways
     * @param {MessageType} type - The URL of the reTHINK Data Object Resource associated with the message that can be
     * used for routing purposes
     * @param {MessageBody} body - Optionally, all message bodies exchanged between different Runtime Messge BUS can
     * contain JWT tokens for Access Control for Identity Assertion purposes that are inserted by the Identity Module
     * before the message is routed to proto stubs
     */
    constructor(id, from, toList, type, body) {
        super();

        this.id = id;
        this.from = from;
        this.to = toList;
        this.type = type;
        this.body = body;
    }


    /**
     * Adds the asserted identity to the message body and removes the given token from the message
     * @param {Identity.JWT} token - idToken to remove from message
     * @param {Identity.Identity} identity - asserted identity to include
     * @return {Message.Message} message - updated message
     */
    assertIdentity(token, identity) {
        if (!token || !identity)
            throw  new Error("message, token to be removed, and assertedIdentity must be provided");
        //console.log('given message', message);
        let newBody = this.body;

        newBody.idToken = null;

        newBody.assertedIdentity = identity;
        this.body = newBody;
        return this;
    }

    /**
     * Adds an Id token to the given message
     * @param {Identity.JWT} token - identity token to include in the message
     * @return {Message.Message} - the updated message
     */
    addIdToken(token) {
        if (!token)
            throw  new Error("message, token to be added, must be provided");
        let newBody = this.body;
        newBody.idToken = token;
        this.body = newBody;
        return this;
    }

    /**
     * Add an access token to the given message
     * @param {Identity.JWT} token - token to be added to the given message
     * @return {Message.Message} -  the updated Message
     */
    addAccessToken(token) {
        if (!token)
            throw  new Error("message, token to be added, must be provided");
        let newBody = this.body;
        newBody.accessToken = token;
        this.body = newBody;
        return this;
    }
}

/**
 * MessageType representing the type of message
 * @type {{CREATE: string, READ: string, UPDATE: string, DELETE: string, SUBSCRIBE: string, UNSUBSCRIBE: string, RESPONSE: string, FORWARD: string}}
 */
export const MessageType = {
    CREATE: 'create', READ: 'read', UPDATE: 'update', DELETE: 'delete', SUBSCRIBE: 'subscribe',
    UNSUBSCRIBE: 'unsubscribe', RESPONSE: 'response', FORWARD: 'forward', EXECUTE: 'execute'
};

export default Message;

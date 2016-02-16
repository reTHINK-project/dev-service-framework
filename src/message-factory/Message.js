/**
 *
 * @author alice.cheambe[at]fokus.fraunhofer.de
 * The Message class is the representation of the reTHINK Message Data Model
 *
*/

export class Message{

    /**
     * Generates a message data object
     *
     * @param {String} id - To be used to associate Response messages to the initial request message.
     * @param {URL.URL} from - URL of Hyperty instance or User associated with it
     * @param {URL.URLList} toList - One or more URLs of Message recipients. According to the URL scheme it may be
     * handled in different ways
     * @param {MessageType} type - The URL of the reTHINK Data Object Resource associated with the message that can be
     * used for routing purposes
     * @param {MessageBody} body - Optionally, all message bodies exchanged between different Runtime Messge BUS can
     * contain JWT tokens for Access Control for Identity Assertion purposes that are inserted by the Identity Module
     * before the message is routed to proto stubs
     */
    constructor(id, from, toList, type,  body) {

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
    assertIdentity(token, identity){
        if(!token || !identity)
            throw  new Error("message, token to be removed, and assertedIdentity must be provided");
        //console.log('given message', message);
        let newBody = this.body;

        newBody.idToken = null;

        newBody.assertedIdentity = identity;
        this.body= newBody;
        return this;
    }

    /**
     * Adds an Id token to the given message
     * @param {Identity.JWT} token - identity token to include in the message
     * @return {Message.Message} - the updated message
     */
    addIdToken(token){
        if(!token )
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
    addAccessToken(token){
        if(!token )
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
export const MessageType = {CREATE: 'create', READ: 'read', UPDATE: 'update', DELETE: 'delete', SUBSCRIBE: 'subscribe',
    UNSUBSCRIBE: 'unsubscribe', RESPONSE: 'response', FORWARD: 'forward'};

export default Message;

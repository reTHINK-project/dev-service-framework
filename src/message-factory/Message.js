/**
* Class implementation of Message Data Model
*/

import {CreateMessageBody, DeleteMessageBody, UpdateMessageBody, ReadMessageBody, ResponseMessageBody,
    ForwardMessageBody} from './MessageBody.js';


export class Message{

    constructor(id, from, toList, type,  body) {

		this._id = id;
        this._from = from;
        this._to = toList;
        this._type = type;
        this._body = body;
     }


    get id(){ return this._id; }

    get from(){ return this._from; }

    get to(){ return this._to; }

    get type() { return this._type; }

    get body(){ return this._body; }

    set id(identifier){
        if(identifier)
            this._id = identifier;
    }

    set from(sender){
        if(sender)
            this._from = sender;
    }

    set type(msgType){
        if(msgType)
            this._type = msgType;
    }

    set body(msgBody){
        if(msgBody)
            this._body = msgBody;
    }
    set to(recipientList){
        if(recipientList)
            this._to = recipientList;
    }

    assertIdentity(message, token, identity){
        if(!message || !token || !identity)
            throw  new Error("message, token to be removed, and assertedIdentity must be provided");
        //console.log('given message', message);
        let newBody = message.body;

        newBody.idToken = null;

        newBody.assertedIdentity = identity;
        message.body= newBody;
        return message;
    }

    addIdToken(message, token){
        if(!message || !token )
            throw  new Error("message, token to be added, must be provided");
        let newBody = message.body;
        newBody.idToken = token;
        message.body = newBody;
        return message;
    }


    addAccessToken(message, token){
        if(!message || !token )
            throw  new Error("message, token to be added, must be provided");
        let newBody = message.body;
        newBody.accessToken = token;
        message.body = newBody;
        return message;
    }
}


export const MessageType = {CREATE: 'create', READ: 'read', UPDATE: 'update', DELETE: 'delete', SUBSCRIBE: 'subscribe',
    UNSUBSCRIBE: 'unsubscribe', RESPONSE: 'response', FORWARD: 'forward'};

export default Message;

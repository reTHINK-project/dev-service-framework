/**
* Class implementation of Message Data Model
*/

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

}


export var MessageType = {CREATE: 'create', READ: 'read', UPDATE: 'update', DELETE: 'delete', SUBSCRIBE: 'subscribe',
    UNSUBSCRIBE: 'unsubscribe', RESPONSE: 'response', FORWARD: 'forward'};

export default Message;

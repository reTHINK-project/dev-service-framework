/**
* Class implementation of Message Data Model
*/

class Message{

    constructor(id, from, toList, type, contextId, body, signature) {

		this.id = id;
        this.from = from;
        this.to = toList;
        this.type = type;
        this.contextId = contextId;
        this.signature = signature;
        this.body = body;
     }

    /*
    get id(){ return this.id; }

    get from(){ return this.from; }

    get type() { return this.type; }

    get contextId() { return this.contextId; }

    get body(){ return this.body; }

    set id(identifier){
        if(identifier)
            this.id = identifier;
    }

    set from(sender){
        if(sender)
            this.from = sender;
    }

    set type(msgType){
        if(msgType)
            this.type = msgType;
    }

    set contextId(cID){
        if(cID)
            this.contextId = cID;
    }
    set body(msgBody){
        if(msgBody)
            this.body = msgBody;
    }
    set to(recipientList){
        if(recipientList)
            this.to = recipientList;
    }

    set signature(signature) {
        if (signature)
            this.signature = signature;
    }*/

}


export var MessageType = {CREATE: 'create', READ: 'read', UPDATE: 'update', DELETE: 'delete', SUBSCRIBE: 'subscribe', UNSUBSCRIBE: 'unsubscribe', RESPONSE: 'response'};
export default Message

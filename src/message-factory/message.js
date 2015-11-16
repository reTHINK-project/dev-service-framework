/**
* Class implementation of Message Data Model
*/

class Message{


	constructor(jsonBody){
        this.jsonBody = JSON.parse(jsonBody);

        this._id = inputBody.id;
    }

    constructor(id, from, type, contextId, body) {

		this._id = id;
        this._from = from;
        this._type = type;
        this._contextId = contextId;
        this._body = body;

        this._to = {};
        this._signature = null;
        this.jsonBody = null;
     }

    get id(){ return this._id; }

    get from(){ return this._from; }

    get type() { return this._type; }

    get contextId() { return this._contextId; }

    get body(){ return this._body; }

    set to(recipientList){
        "use strict";
        this._to = recipientList;
    }

    set signature(signature){
        "use strict";
        this._signature = signature;
    }


}
//var MessageType = new enums.Enum("CREATE", "UPDATE", "DELETE", "READ", "SUBSCRIBE", "UNSUBSCRIBE", "RESPONSE");
export var MessageType = {CREATE: 'create', READ: 'read', UPDATE: 'update', DELETE: 'delete', SUBSCRIBE: 'subscribe', UNSUBSCRIBE: 'unsubscribe', RESPONSE: 'response'};
export default Message
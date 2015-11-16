class MessageBody{

	constructor(idToken, accessToken, resource){
        //let _this = this;
        if(idToken != isUndefinedOrNull)
            this._idToken = idToken;
        if(accessToken != isUndefinedOrNull)
            this._accessToken = accessToken;
        if(resource != isUndefinedOrNull)
            this._resource = resource;
	}

    get idToken(){ return this._idToken; }

    get accessToken(){ return this._accessToken; }

    get resource() { return this._resource; }

    toJson(){
        //TODO generate json object
        var json = {
            "idToken" : {
                "authenticationDataInv": {
                    "iDTokenArray": {
                        "type": "array",
                        "items": {
                            "$ref": "../Identity/IDToken.json"
                        }
                    }
                    ,
                    "identityInv": {
                        "$ref": "../Identity/Identity.json"
                    }
                }
            }
        }
        return json;
    }
}

class CreateMessageBody extends MessageBody {
    constructor(value, policy, idToken, accessToken, resource){
        if(isUndefinedOrNull(value))
            throw new NullParameterError("The value parameter is null");
        super(idToken,accessToken, resource);

        this._value = value;
        if(policy != isUndefinedOrNull)
            this._policy = policy;
    }

    get value() { return this._value; }

    get policy(){return this._policy}

    set value(value){
        if(value)
            this._value = value
    }

    set policy(policy){
        if(policy)
            this._policy = policy
    }
}

class ReadMessageBody extends MessageBody {
    constructor(attribute, criteriaSyntax, criteria, policy, idToken, accessToken, resource){
        super(idToken,accessToken ,resource );

        if(!isUndefinedOrNull(attribute)){
            this._attribute = attribute;
        }

        if(!isUndefinedOrNull(criteriaSyntax)){
            this._criteriaSyntax = criteriaSyntax;
        }

        if(criteria != isUndefinedOrNull){
            this._criteria = criteria;
        }
    }

    get attribute() { return this._attribute; }
    get criteriaSyntax() { return this._criteriaSyntax; }
    get criteria() {return }

    set attribute(atr){
        if(atr)
            this._attribute = atr;
    }

    set criteria(criteria){
        if(criteria)
            this._criteria;
    }

    set criteriaSyntax(crSyntax){
        if(crSyntax)
            this._criteriaSyntax = crSyntax;
    }
}


class DeleteMessageBody extends MessageBody {
    constructor(attribute, idToken, accessToken, resource){
        super(idToken,accessToken ,resource );

        if(attribute){
            this._attribute = attribute;
        }
    }

    get attribute() { return this._attribute; }
}

class UpdateMessageBody extends MessageBody {
    constructor(attribute, value, idToken, accessToken, resource){
        super(idToken,accessToken ,resource );

        if(attribute)
            this._attribute = attribute;

        if(value)
            this._value = value;
    }

    get attribute() { return this._attribute; }
    get value(){ return this._value; }
}

class ResponseMessageBody extends MessageBody {
    constructor(code, decription, value, idToken, accessToken, resource){
        super(idToken,accessToken ,resource );

        if(code)
            this._code = attribute;

        if(decription)
            this._description = decription;

        if(value)
            this._value = value;
    }

    get code(){ return this._code; }
    get description() { return this._description; }
    get value(){ return this._value; }
}

var REASON_PHRASE = {
    100: 'Continue',
    101: 'Switching Protocols',
    200: 'OK',
    201: 'Created',
    202: 'Accepted',
    203: 'Non-Authoritative Information',
    204: 'No Content',
    205: 'Reset Content',
    206: 'Partial Content',
    300: 'Multiple Choices',
    301: 'Moved Permanently',
    302: 'Found',
    303: 'See Other',
    304: 'Not Modified',
    305: 'Use Proxy',
    307: 'Temporary Redirect',
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Payload Too Large',
    414: 'Request-URI Too Long',
    415: 'Unsupported Media Type',
    416: 'Range Not Satisfiable',
    417: 'Expectation Failed',
    426: 'Upgrade Required',
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Time-out',
    505: 'HTTP Version Not Supported'
};
export var REASON_PHRASE;
export default MessageBody;
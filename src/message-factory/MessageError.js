/**
 * Created by amo on 13/11/2015.
 */

class MessageError extends Error {
    constructor(message) {
        super();
        this.message = message;
        this.stack = (new Error()).stack;
        this.name = this.constructor.name;
    }
}

class NullParameterError extends MessageError {
    constructor(m) {
        super(m);
    }
}
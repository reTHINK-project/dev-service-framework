/**
 * Created by amo on 13/11/2015.
 */
class rethinkObject{

    constructor(validation, schema){
        this._validation = validation;
        this._schema = schema;

        if (this.validate === undefined) {
            throw new TypeError("Must override validate ");
        }

    }

    get validation(){
        if(isUndefinedOrNull(this._validation))
            return false;
        else
            return this._validation;
    }

    get schema(){
        return this._schema;

    }

    validate(data){

        return var valid = tv4.validate(data, this._schema);
    }
}
export default rethinkObject;
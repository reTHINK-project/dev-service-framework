import tv4 from "tv4";

class rethinkObject{

    constructor(validation, schema){

        let _this = this;

        this.validation = validation;
        this.schema = schema;



    }



    validate(data){
        if(this.schema)
            return tv4.validate(data, this.schema);
        else
            return false;
    }
}
export default rethinkObject;
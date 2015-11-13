/**
* Message Factory
* 
*/
import rethinkObject from '../reTHINKObject/rethinkObject';

class MessageFactory extends rethinkObject {
	
	constructor(validation, schema){
        super(validation,schema);
		
	}

	createMessageRequest()
	{
		//Body
	}
	
	createDeleteMessageRequest(data){
		
	}
	
	createUpdateMessageRequest(data,  attribute,  value){
		
	}
	
	createReadMessageRequest( data,  attribute,  criteria,  criteriaSyntax){
		
		//Body
	}
	
	createResponse( data,  code)
	{
		
	}
	
	getHeader( data,  key){
		
	}
	
	getBody( data){
		
	}
}

export default MessageFactory;
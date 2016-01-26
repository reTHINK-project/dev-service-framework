import MessageFactory from '../src/message-factory/MessageFactory.js';
import { Message, MessageType} from '../src/message-factory/Message.js';

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

let expect = chai.expect;
chai.use(chaiAsPromised);

//Testing the Message factory
describe('MessageFactory', function() {

    let message;
    let messageFactory;

    describe('constructor()', function() {
        it('should create a Message Factory object without error', function(done) {
            messageFactory = new MessageFactory("false", '{}');
            messageFactory.validate()
            done();
        });
    });

    describe('createMessageRequest()', function() {
        it('should be a Message of Type CREATE', function(done) {
            //from, to, idToken, accessToken, resource, schema,assertedIdentity, value, policy
            message = messageFactory.createMessageRequest("hyperty-runtime-esn://domain.com/12345",
                "[hyperty-runtime-imei://domain.com/12345, hyperty-runtime-imei://domain.com/678910]",
                null, null, "hyperty-runtime-uuid://domain.com/myResource",
               "{}", "alice@fokus.de","{audio: 'PCMU-Codec'}", "policyURL");

            console.log('Create Message', JSON.stringify(message));
            expect(message).to.not.be.empty;
            expect(message.type).to.eql(MessageType.CREATE);

            let isValid = messageFactory.validate(message);
            console.log('Is message valid? ', isValid);
            done();
        });
        //TODO Validate against schema
        /*
        it('should validate', function(done){
            let isValid = messageFactory.validate(message);
            console.log('Is message valid? ', isValid);
            done();

        });*/
    });

    describe('createForwardMessageRequest()', function() {

        it('should create a new Forward Message Request with a message payload', function(done) {

            //message, from, to, idToken, accessToken, resource, schema, assertedIdentity
            let forwardMessage = messageFactory.createForwardMessageRequest(message,
                "hyperty-runtime-esn://fromdomain.com/12345", "[hyperty-runtime-imei://todomain.com/12345]",
                null, null, "hyperty-runtime-uuid://domain.com/myResource",
                 null, "alice@fokus.de");

            console.log('Forward Message Request', JSON.stringify(forwardMessage));
            expect(forwardMessage).to.not.be.empty;
            expect(forwardMessage.type).to.eql(MessageType.FORWARD);
            done();
        });
    });

    describe('createDeleteMessageRequest()', function() {
        it('should be a Message of Type DELETE', function(done) {
            //(from, to, idToken, accessToken, resource, attribute,schema, assertedIdentity
            let message = messageFactory.createDeleteMessageRequest("hyperty-runtime-esn://domain.com/12345",
                "[hyperty-runtime-imei://domain.com/123456]",
                null, null, "hyperty-runtime-uuid://domain.com/myResource",
                "audio", "{}", "alice-dev@fokus.de");

            console.log('Delete Message', JSON.stringify(message));
            expect(message).to.not.be.empty;
            expect(message.type).to.eql(MessageType.DELETE);

            done();
        });
    });


    describe('createUpdateMessageRequest()', function() {
        it('should be a Message of Type UPDATE', function(done) {
            //from, to, idToken, accessToken, resource, signature, schema,assertedIdentity, attribute,  value
           let message = messageFactory.createUpdateMessageRequest("hyperty-esn://domain.com/12345",
                "[hyperty-imei://domain.com/123456]", null, null,
                "hyperty-runtime-uuid://domain.com/myResource", "{}", "alice-dev@fokus.de", "audio", "audio-only");

            console.log('Update Message', JSON.stringify(message));
            expect(message).to.not.be.empty;
            expect(message.type).to.eql(MessageType.UPDATE);

            done();
        });
    });

    describe('createReadMessageRequest()', function() {
        it('should be a Message of Type READ', function(done) {
            let readMessage = messageFactory.createReadMessageRequest("hyperty-esn://domain.com/12345",
                "[hyperty-imei://domain.com/123456]", null, null,
                "hyperty-runtime-uuid://domain.com/myResource", "{}", "alice-dev@fokus.de", "audio", "audio-only");

            console.log('Update Message', JSON.stringify(readMessage));
            expect(readMessage).to.not.be.empty;
            expect(readMessage.type).to.eql(MessageType.READ);

            done();
        });
    });

    describe('createForwardMessageRequest()', function() {
        it('should be a Message of Type FORWARD', function(done) {
            //createForwardMessageRequest(data, from, to, idToken, accessToken, resource, schema, assertedIdentity)
            let forwardMessage = messageFactory.createForwardMessageRequest(message,"hyperty-runtime-from://domain.com/from",
                "[hyperty-runtime-to://domain.com/to, hyperty-runtime-to://domain.com/678910]",
                "mytokenfiisiirrn222", "accesstokenfjfpdfg333", "hyperty-runtime-uuid://domain.com/myResource",
                "{}", "alice@fokus.de");

            console.log('Forward Message Request', JSON.stringify(forwardMessage));
            expect(forwardMessage).to.not.be.empty;
            expect(forwardMessage.type).to.eql(MessageType.FORWARD);

            done();
        });
    });

    describe('generateUpdateMessageBody()', function() {

        it('should generate a new Update Message Body to the given message', function(done) {

            let updateMessage = messageFactory.generateUpdateMessageBody(message, "audio", "MPEG");
            console.log('updated msg', JSON.stringify(updateMessage));
            expect(updateMessage).to.not.be.empty;
            expect(updateMessage.type).to.eql(MessageType.UPDATE);
            done();
        });
    });

    describe('generateReadMessageBody()', function() {

        it('should generate a new Read Message Body to the given message', function(done) {

            let readMessage = messageFactory.generateReadMessageBody(message, "video", "myCriteriaObj", "myCriteriaSyntax")
            console.log('delete msg', JSON.stringify(readMessage));
            expect(readMessage).to.not.be.empty;
            expect(readMessage.type).to.eql(MessageType.READ);
            done();
        });
    });

    describe('generateDeleteMessageBody()', function() {

        it('should generate a new Delete Message Body to the given message', function(done) {

            let deleteMessage = messageFactory.generateDeleteMessageBody(message, "audio");
            console.log('delete msg', JSON.stringify(deleteMessage));
            expect(deleteMessage).to.not.be.empty;
            expect(deleteMessage.type).to.eql(MessageType.DELETE);
            done();
        });
    });

    describe('createMessageResponse()', function() {
        it('should be a Response Message of Type RESPONSE', function(done) {
            //from, to, idToken, accessToken, resource, schema,assertedIdentity, value, policy
            let message = messageFactory.createMessageResponse("hyperty-runtime-esn://domain.com/12345",
                "[hyperty-runtime-imei://domain.com/12345, hyperty-runtime-imei://domain.com/678910]",
                null, null, "hyperty-runtime-uuid://domain.com/myResource",
                "{}", "alice@fokus.de","200", "OK");

            console.log('Response Message', JSON.stringify(message));
            expect(message).to.not.be.empty;
            expect(message.type).to.eql(MessageType.RESPONSE);

            let isValid = messageFactory.validate(message);
            console.log('Is message valid? ', isValid);
            done();
        });
        //TODO Validate against schema
        /*
         it('should validate', function(done){
         let isValid = messageFactory.validate(message);
         console.log('Is message valid? ', isValid);
         done();

         });*/
    });

    describe('generateResponse()', function() {

        it('should generate a Response to the given message', function(done) {

            let response = messageFactory.generateMessageResponse(message, "404", "Not Found");
            console.log('response msg', JSON.stringify(response));
            expect(response).to.not.be.empty;
            expect(response.type).to.eql(MessageType.RESPONSE);
            done();
        });
    });
});


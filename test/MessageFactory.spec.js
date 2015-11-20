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
            //createMessageRequest(from, to, contextId, value, policy, idToken, accessToken, resource, signature)
            message = messageFactory.createMessageRequest(
                "hyperty-runtime-esn://domain.com/12345", "[hyperty-runtime-imei://domain.com/12345, hyperty-runtime-imei://domain.com/678910]","a7317660-bfa1-4830-b03f-278a814d2feb", "{audio: 'PCMU-Codec'}",
                "policyURL", null, null, "hyperty-runtime-uuid://domain.com/myResource", null);

            console.log('created msg', JSON.stringify(message));
            expect(message).to.not.be.empty;
            expect(message.type).to.eql(MessageType.CREATE);
            done();
        });
    });

    describe('updateMessageRequest()', function() {



        it('should be a Message of Type UPDATE', function(done) {

            let updateMessage = messageFactory.createUpdateMessageRequest(message, "audio", "MPEG");
            console.log('updated msg', JSON.stringify(updateMessage));
            expect(updateMessage).to.not.be.empty;
            expect(updateMessage.type).to.eql(MessageType.UPDATE);
            done();
        });
    });

    describe('deleteMessageRequest()', function() {

        it('should be a Message of Type DELETE', function(done) {

            let deleteMessage = messageFactory.createDeleteMessageRequest(message, "audio");
            console.log('delete msg', JSON.stringify(deleteMessage));
            expect(deleteMessage).to.not.be.empty;
            expect(deleteMessage.type).to.eql(MessageType.DELETE);
            done();
        });
    });
});


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

    describe('createCreateMessageRequest()', function() {
        it('should be a Message of Type CREATE', function(done) {
            //(from, to, value, policy)
            message = messageFactory.createCreateMessageRequest("hyperty-runtime-esn://domain.com/12345",
                "[hyperty-runtime-imei://domain.com/12345, hyperty-runtime-imei://domain.com/678910]",
                "{audio: 'PCMU-Codec'}", "policyURL");

            //console.log('Create Message', JSON.stringify(message));
            expect(message).to.not.be.empty;
            expect(message.type).to.eql(MessageType.CREATE);
            done();
        });
    });

    describe('createForwardMessageRequest()', function() {

        it('should create a new Forward Message Request with a message payload', function(done) {

            //from, to, message
            let forwardMessage = messageFactory.createForwardMessageRequest(
                "hyperty-runtime-esn://fromdomain.com/12345", "[hyperty-runtime-imei://todomain.com/12345]",
                message);

            //console.log('Forward Message Request', JSON.stringify(forwardMessage));
            expect(forwardMessage).to.not.be.empty;
            expect(forwardMessage.type).to.eql(MessageType.FORWARD);
            done();
        });
    });

    describe('createDeleteMessageRequest()', function() {
        it('should be a Message of Type DELETE', function(done) {
            //createDeleteMessageRequest(from, to, resource, attribute) ;
            let message = messageFactory.createDeleteMessageRequest("hyperty-runtime-esn://domain.com/12345",
                "[hyperty-runtime-imei://domain.com/123456]","hyperty-runtime-uuid://domain.com/myResource",
                "audio");

            //console.log('Delete Message', JSON.stringify(message));
            expect(message).to.not.be.empty;
            expect(message.type).to.eql(MessageType.DELETE);

            done();
        });
    });


    describe('createUpdateMessageRequest()', function() {
        it('should be a Message of Type UPDATE', function(done) {
            //createUpdateMessageRequest(from, to, value, resource, attribute)
           let message = messageFactory.createUpdateMessageRequest("hyperty-esn://domain.com/12345",
                "[hyperty-imei://domain.com/123456]", "audio-only", "hyperty-runtime-uuid://domain.com/myResource",
                "audio");

            //console.log('Update Message', JSON.stringify(message));
            expect(message).to.not.be.empty;
            expect(message.type).to.eql(MessageType.UPDATE);

            done();
        });
    });

    describe('createReadMessageRequest()', function() {
        it('should be a Message of Type READ', function(done) {
            //createReadMessageRequest(from, to, resource, attribute);
            let readMessage = messageFactory.createReadMessageRequest("hyperty-esn://domain.com/12345",
                "[hyperty-imei://domain.com/123456]", "hyperty-runtime-uuid://domain.com/myResource",
                "audio");

            //console.log('Update Message', JSON.stringify(readMessage));
            expect(readMessage).to.not.be.empty;
            expect(readMessage.type).to.eql(MessageType.READ);

            done();
        });
    });

    describe('createSubscribeMessageRequest()', function() {
        it('should be a Message of Type SUBSCRIBE', function(done) {
            //createSubscribeMessageRequest(from, to, resource);
            let subscribeMessage = messageFactory.createSubscribeMessageRequest("hyperty-esn://domain.com/12345",
                "[hyperty-imei://domain.com/123456]", "hyperty-runtime-uuid://domain.com/myResource-sub");

            //console.log('UNSUBSCRIBE Message', JSON.stringify(subscribeMessage));
            expect(subscribeMessage).to.not.be.empty;
            expect(subscribeMessage.type).to.eql(MessageType.SUBSCRIBE);

            done();
        });
    });

    describe('createUnSubscribeMessageRequest()', function() {
        it('should be a Message of Type SUBSCRIBE', function(done) {
            //createSubscribeMessageRequest(from, to, resource);
            let unSubscribeMessage = messageFactory.createUnsubscribeMessageRequest("hyperty-esn://domain.com/12345",
                "[hyperty-imei://domain.com/123456]", "hyperty-runtime-uuid://domain.com/myResource-unsub");

            //console.log('SUBSCRIBE Message', JSON.stringify(unSubscribeMessage));
            expect(unSubscribeMessage).to.not.be.empty;
            expect(unSubscribeMessage.type).to.eql(MessageType.UNSUBSCRIBE);

            done();
        });
    });

    describe('assertIdentity()', function() {
        it('should add asserted identity to the given message', function(done) {
            //assertIdentity(message, token, identity)
            let assertedMessage = message.assertIdentity(message, "token","alice@frauhofer.fokus.de");
            //console.log('asserted Identity Message', JSON.stringify(assertedMessage));
            expect(assertedMessage).to.not.be.empty;
            expect(assertedMessage.body.assertedIdentity).to.eql("alice@frauhofer.fokus.de");
            done();
        });
    });

    describe('addAccessToken()', function() {
        it('should add asserted identity to the given message', function(done) {
            //addAccessToken(message, token)
            let updatedMessage = message.addAccessToken(message, "7z94rif97z39gfi9v33893z3");
            //console.log('Updated Message', JSON.stringify(updatedMessage));
            expect(updatedMessage).to.not.be.empty;
            expect(updatedMessage.body.accessToken).to.eql("7z94rif97z39gfi9v33893z3");
            done();
        });
    });

    describe('addIdToken()', function() {
        it('should add asserted identity to the given message', function(done) {
            //addIdToken(message, token)
            let updatedMessage = message.addIdToken(message, "3jwwjhw89whbhuf9z439zhfih94z");
            //console.log('Updated Message', JSON.stringify(updatedMessage));
            expect(updatedMessage).to.not.be.empty;
            expect(updatedMessage.body.idToken).to.eql("3jwwjhw89whbhuf9z439zhfih94z");
            done();
        });
    });

    describe('createMessageResponse()', function() {
        it('should be a Response Message of Type RESPONSE', function(done) {
            //message, code, value, source
            let response = messageFactory.createMessageResponse(message,"200", "OK");

            //console.log('Response Message', JSON.stringify(response));
            expect(response).to.not.be.empty;
            expect(response.type).to.eql(MessageType.RESPONSE);
            done();
        });

    });
});


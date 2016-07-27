import MessageFactory from '../src/message-factory/MessageFactory.js';
import {MessageType} from '../src/message-factory/Message.js';
import {RESPONSE_CODE, REASON_PHRASE} from '../src/message-factory/MessageBody.js';

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

import msgSchema from '../schemas/json-schema/core/Message.json'

let expect = chai.expect;
chai.use(chaiAsPromised);

//Testing the Message factory
describe('MessageFactory', function () {
    let message;
    let messageFactory;

    describe('constructor()', function () {
        it('should create a Message Factory object without error', function (done) {
            messageFactory = new MessageFactory();
            done();
        });
    });

    describe('createCreateMessageRequest()', function () {
        it('should be a Message of Type CREATE', function (done) {
            //(from, to, value, policy)
            message = messageFactory.createCreateMessageRequest("hyperty-runtime-esn://domain.com/12345",
                ["hyperty-runtime-imei://domain.com/12345", "hyperty-runtime-imei://domain.com/678910"],
                {"audio": 'PCMU-Codec'}, "policyURL");

            //console.log('Create Message', JSON.stringify(message));
            expect(message).to.not.be.empty;
            expect(message.type).to.eql(MessageType.CREATE);
            expect(message.validate(msgSchema)).to.be.ok;
            done();
        });
    });

    describe('createForwardMessageRequest()', function () {

        it('should create a new Forward Message Request with a message payload', function (done) {

            //from, to, message
            let forwardMessage = messageFactory.createForwardMessageRequest(
                "hyperty-runtime-esn://fromdomain.com/12345", ["hyperty-runtime-imei://todomain.com/12345"],
                message);

            //console.log('Forward Message Request', JSON.stringify(forwardMessage));
            expect(forwardMessage).to.not.be.empty;
            expect(forwardMessage.type).to.eql(MessageType.FORWARD);
            expect(forwardMessage.validate(msgSchema)).to.be.ok;
            done();
        });
    });

    describe('createDeleteMessageRequest()', function () {
        it('should be a Message of Type DELETE', function (done) {
            //createDeleteMessageRequest(from, to, resource, attribute) ;
            let message = messageFactory.createDeleteMessageRequest("hyperty-runtime-esn://domain.com/12345",
                ["hyperty-runtime-imei://domain.com/123456"], "hyperty-runtime-uuid://domain.com/myResource",
                "audio");

            //console.log('Delete Message', JSON.stringify(message));
            expect(message).to.not.be.empty;
            expect(message.type).to.eql(MessageType.DELETE);
            expect(message.validate(msgSchema)).to.be.ok;

            done();
        });
    });


    describe('createUpdateMessageRequest()', function () {
        it('should be a Message of Type UPDATE', function (done) {
            //createUpdateMessageRequest(from, to, value, resource, attribute)
            let message = messageFactory.createUpdateMessageRequest("hyperty-esn://domain.com/12345",
                ["hyperty-imei://domain.com/123456"], "audio-only", "hyperty-runtime-uuid://domain.com/myResource",
                "audio");

            //console.log('Update Message', JSON.stringify(message));
            expect(message).to.not.be.empty;
            expect(message.type).to.eql(MessageType.UPDATE);
            expect(message.validate(msgSchema)).to.be.ok;

            done();
        });
    });

    describe('createReadMessageRequest()', function () {
        it('should be a Message of Type READ', function (done) {
            //createReadMessageRequest(from, to, resource, attribute);
            let readMessage = messageFactory.createReadMessageRequest("hyperty-esn://domain.com/12345",
                ["hyperty-imei://domain.com/123456"], "hyperty-runtime-uuid://domain.com/myResource",
                "audio");

            //console.log('Update Message', JSON.stringify(readMessage));
            expect(readMessage).to.not.be.empty;
            expect(readMessage.type).to.eql(MessageType.READ);
            expect(readMessage.validate(msgSchema)).to.be.ok;

            done();
        });
    });

    describe('createSubscribeMessageRequest()', function () {
        it('should be a Message of Type SUBSCRIBE', function (done) {
            //createSubscribeMessageRequest(from, to, resource);
            let subscribeMessage = messageFactory.createSubscribeMessageRequest("hyperty-esn://domain.com/12345",
                ["hyperty-imei://domain.com/123456"], "hyperty-runtime-uuid://domain.com/myResource-sub");

            //console.log('UNSUBSCRIBE Message', JSON.stringify(subscribeMessage));
            expect(subscribeMessage).to.not.be.empty;
            expect(subscribeMessage.type).to.eql(MessageType.SUBSCRIBE);
            expect(subscribeMessage.validate(msgSchema)).to.be.ok;

            done();
        });
    });

    describe('createUnSubscribeMessageRequest()', function () {
        it('should be a Message of Type SUBSCRIBE', function (done) {
            //createSubscribeMessageRequest(from, to, resource);
            let unSubscribeMessage = messageFactory.createUnsubscribeMessageRequest("hyperty-esn://domain.com/12345",
                ["hyperty-imei://domain.com/123456"], "hyperty-runtime-uuid://domain.com/myResource-unsub");

            //console.log('SUBSCRIBE Message', JSON.stringify(unSubscribeMessage));
            expect(unSubscribeMessage).to.not.be.empty;
            expect(unSubscribeMessage.type).to.eql(MessageType.UNSUBSCRIBE);
            expect(unSubscribeMessage.validate(msgSchema)).to.be.ok;

            done();
        });
    });

    describe('assertIdentity()', function () {
        it('should add asserted identity to the given message', function (done) {
            //assertIdentity(token, identity)
            message.assertIdentity("token", "alicem@frauhofer.fokus.de");
            //console.log('asserted Identity Message', JSON.stringify(message));
            expect(message.body.assertedIdentity).to.eql("alicem@frauhofer.fokus.de");
            done();
        });
    });

    describe('addAccessToken()', function () {
        it('should add asserted identity to the given message', function (done) {
            //addAccessToken(token)
            message.addAccessToken("7z94rif97z39gfi9v33893z3");
            //console.log('Updated Message', JSON.stringify(updatedMessage));
            expect(message.body.accessToken).to.eql("7z94rif97z39gfi9v33893z3");
            done();
        });
    });

    describe('addIdToken()', function () {
        it('should add asserted identity to the given message', function (done) {
            //addIdToken(token)
            message.addIdToken("3jwwjhw89whbhuf9z439zhfih94z");
            //console.log('Updated Message', JSON.stringify(message));
            expect(message.body.idToken).to.eql("3jwwjhw89whbhuf9z439zhfih94z");
            done();
        });
    });

    describe('createExecuteMessageRequest()', function () {

        it('should create a new Execute Message Request', function (done) {

            //from, to, method, params
            let executeMessage = messageFactory.createExecuteMessageRequest(
                "hyperty-runtime-esn://fromdomain.com/12345", "[hyperty-runtime-imei://todomain.com/12345]",
                "read", ['Param1', 'Param2']);

            //console.log('Execute Message Request', JSON.stringify(executeMessage));
            expect(executeMessage).to.not.be.empty;
            expect(executeMessage.type).to.eql(MessageType.EXECUTE);
            done();
        });
    });

    describe('createMessageResponse()', function () {
        it('should be a Response Message of Type RESPONSE', function (done) {
            //message, code, value, source
            let response = messageFactory.createMessageResponse(message, RESPONSE_CODE[200], REASON_PHRASE[200]);
            //console.log("response code:"+RESPONSE_CODE[200]+ "reason phrase: "+REASON_PHRASE[200]);
            //console.log('Response Message', JSON.stringify(response));
            expect(response).to.not.be.empty;
            expect(response.type).to.eql(MessageType.RESPONSE);
            done();
        });

    });
});


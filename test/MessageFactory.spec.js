import MessageFactory from '../src/message-factory/messageFactory.js';
import Message from '../src/message-factory/message.js';

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

let expect = chai.expect;
chai.use(chaiAsPromised);

//Testing the Message factory
describe('MessageFactory', function() {


    describe('constructor()', function() {
        it('should create a Message Factory object without error', function(done) {
            let messageFactory = new MessageFactory("false", '{}');

            messageFactory.validate()
            done();
        });
    });

    describe('createMessageRequest()', function() {
        let messageFactory = new MessageFactory("false", "{}");

        it('should be a Message of Type CREATE', function(done) {


            //createMessageRequest(from, to, contextId, value, policy, idToken, accessToken, resource, signature)
            let message = messageFactory.createMessageRequest(
                "hyperty-runtime-esn://domain.com/12345", "[hyperty-runtime-imei://domain.com/12345, hyperty-runtime-imei://domain.com/678910]","a7317660-bfa1-4830-b03f-278a814d2feb", "{audio: 'PCMU-Codec'}",
                "policyURL", null, null, "hyperty-runtime-uuid://domain.com/myResource", null);

            console.log('created msg', JSON.stringify(message));
            expect(message).to.not.be.empty;
            done();
        });
    });

    describe('updateMessageRequest()', function() {
        let messageFactory = new MessageFactory("false", "{}");
        let message = messageFactory.createMessageRequest(
            "hyperty-runtime-esn://domain.com/12345", "[hyperty-runtime-imei://domain.com/12345, hyperty-runtime-imei://domain.com/678910]","a7317660-bfa1-4830-b03f-278a814d2feb", "{audio: 'PCMU-Codec'}",
            "policyURL", null, null, "hyperty-runtime-uuid://domain.com/myResource", null);

        it('should be a Message of Type UPDATE', function(done) {
            console.log('created msg', JSON.stringify(message));
            let updateMessage = messageFactory.createUpdateMessageRequest(message, "audio", "MPEG");
            console.log('updated msg', JSON.stringify(updateMessage));
            expect(message).to.not.be.empty;
            done();
        });
    });
});


import HypertyDiscovery from '../src/hyperty-discovery/HypertyDiscovery';

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

let expect = chai.expect;
chai.use(chaiAsPromised);

describe('HypertyDiscovery', function() {
  let domain = 'ist.pt';
  let messageBus = {
    postMessage: (msg, replyCallback) => {

      //if the discoverHypertyPerUser don't receive a domain, it will use the domain from the constructor
      if (msg.from === 'hyperty://' + domain + '/hypertyDiscovery') {
        expect(msg).to.eql({
          type: 'READ', from: 'hyperty://ist.pt/hypertyDiscovery', to: 'domain://registry.ist.pt/',
          body: {resource: 'user://gmail.com/openidtest10'}
        });
        replyCallback({
          id: 1, type: 'response', to: msg.from, from: msg.to, body: {code: 200,
            assertedIdentity: 'user://gmail.com/openidtest10',
            value: {'hyperty://ist.pt/1':
                        {descriptor: 'hyperty-catalogue://ist.pt/.well-known/hyperty/HelloHyperty',
                         lastModified: '"2016-03-03T13:32:06Z"'}}}
        });
      } else {
        expect(msg).to.eql({
          type: 'READ', from: 'hyperty://specific.com/hypertyDiscovery', to: 'domain://registry.specific.com/',
          body: {resource: 'user://specific.com/openidtest10'}
        });
        replyCallback({
          id: 1, type: 'response', to: msg.from, from: msg.to, body: {code: 200,
            assertedIdentity: 'user://specific.com/openidtest10',
            value: {'hyperty://specific.com/1':
                        {descriptor: 'hyperty-catalogue://specific.com/.well-known/hyperty/HelloHyperty',
                         lastModified: '"2016-03-03T13:32:06Z"'}}}
        });
      }

    }
  };

  let hypertyDiscovery = new HypertyDiscovery(domain, messageBus);

  describe('constructor()', function() {
    it('should create a HypertyDiscovery object without error', function() {
      expect(hypertyDiscovery.discoveryURL).to.be.equal('hyperty://ist.pt/hypertyDiscovery');
    });
  });

  describe('discoverHypertyPerUser()', function() {
    it('should return a Promise with an Identity using the defauld domain', function(done) {

      let expectedMessage = {id: 'openidtest10@gmail.com',
                            descriptor: 'hyperty-catalogue://ist.pt/.well-known/hyperty/HelloHyperty',
                            hypertyURL: 'hyperty://ist.pt/1'};

      expect(hypertyDiscovery.discoverHypertyPerUser('openidtest10@gmail.com').then(function(response) {
        return response;
      })).to.be.fulfilled.and.eventually.eql(expectedMessage).and.notify(done);

    });

    it('should return a Promise with an Identity using a given domain', function(done) {

      let expectedMessage = {id: 'openidtest10@specific.com',
                            descriptor: 'hyperty-catalogue://specific.com/.well-known/hyperty/HelloHyperty',
                            hypertyURL: 'hyperty://specific.com/1'};

      expect(hypertyDiscovery.discoverHypertyPerUser('openidtest10@specific.com', 'specific.com').then(function(response) {
        return response;
      })).to.be.fulfilled.and.eventually.eql(expectedMessage).and.notify(done);
    });
  });

});

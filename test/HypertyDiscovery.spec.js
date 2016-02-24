import HypertyDiscovery from '../src/hyperty-discovery/HypertyDiscovery';

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

let expect = chai.expect;
chai.use(chaiAsPromised);

describe('HypertyDiscovery', function() {
  let domain = 'ist.pt';
  let messageBus = {
    postMessage: (msg, replyCallback) => {

      replyCallback({
        id: 1, type: 'response', to: 'hyperty://ist.pt/123', from: 'domain://registry.ist.pt/', body: {code: 200,
          assertedIdentity: 'user://gmail.com/openidtest10',
          hyperties: {'hyperty://ist.pt/1': {descriptor: 'hyperty-catalogue://ist.pt/.well-known/hyperty/HelloHyperty'}},
          last: 'hyperty://ist.pt/1'}
      });
    }
  };

  let hypertyDiscovery = new HypertyDiscovery(domain, messageBus);

  describe('constructor()', function() {
    it('should create a HypertyDiscovery object without error', function() {
      expect(hypertyDiscovery.discoveryURL).to.be.equal('hyperty://ist.pt/hypertyDisovery');
    });
  });

  describe('discoverHypertyPerUser()', function() {
    it('should return a Promise with an Identity', function(done) {

      let expectedMessage = {id: 'openidtest10@gmail.com',
                            descriptor: 'hyperty-catalogue://ist.pt/.well-known/hyperty/HelloHyperty',
                            hypertyURL: 'hyperty://ist.pt/1'};

      expect(hypertyDiscovery.discoverHypertyPerUser('openidtest10@gmail.com').then(function(response) {
        return response;
      })).to.be.fulfilled.and.eventually.eql(expectedMessage).and.notify(done);

    });
  });

});

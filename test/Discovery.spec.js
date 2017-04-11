import HypertyDiscovery from '../src/discovery/Discovery';

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

let expect = chai.expect;
chai.use(chaiAsPromised);

describe('Discovery', function() {
  let domain = 'ist.pt';
  let runtimeURL = 'runtimeURL';
  let messageBus = {
    postMessage: (msg, replyCallback) => {

      //if the discoverHypertyPerUser don't receive a domain, it will use the domain from the constructor
      if (msg.body.resource === 'user://gmail.com/openidtest10') {
        expect(msg).to.eql({
          type: 'read', from: domain, to: 'domain://registry.ist.pt/',
          body: {resource: 'user://gmail.com/openidtest10'}
        });
        replyCallback({
          id: 1, type: 'response', to: msg.from, from: msg.to, body: {code: 200,
            assertedIdentity: 'user://gmail.com/openidtest10',
            value: {'hyperty://ist.pt/1':
                        {descriptor: 'hyperty-catalogue://ist.pt/.well-known/hyperty/HelloHyperty',
                         lastModified: '"2016-03-03T13:32:06Z"'}}}
        });
      } else if (msg.body.resource === 'user://specific.com/openidtest10') {
        expect(msg).to.eql({
          type: 'read', from: domain, to: 'domain://registry.specific.com/',
          body: {resource: 'user://specific.com/openidtest10'}
        });
        replyCallback({
          id: 1, type: 'response', to: msg.from, from: msg.to, body: {code: 200,
            assertedIdentity: 'user://specific.com/openidtest10',
            value: {'hyperty://specific.com/1':
                        {descriptor: 'hyperty-catalogue://specific.com/.well-known/hyperty/HelloHyperty',
                         lastModified: '"2016-03-03T13:32:06Z"'}}}
        });
      } else if (msg.body.resource === 'user://gmail.com/openidtest20') {
        expect(msg).to.eql({
          type: 'read', from: domain, to: 'domain://registry.ist.pt/',
          body: {resource: 'user://gmail.com/openidtest20', criteria: {resources: ['chat'], dataSchemes: ['comm']}}
        });
        replyCallback({
          id: 1, type: 'response', to: msg.from, from: msg.to, body: {code: 200,
            assertedIdentity: 'user://gmail.com/openidtest20',
            value: {'hyperty://ist.pt/1':
                        {descriptor: 'hyperty-catalogue://ist.pt/.well-known/hyperty/HelloHyperty',
                         lastModified: '"2016-03-03T13:32:06Z"',
                         dataSchemes: ['comm'],
                         resources:   ['chat']}}}
        });
      }

    }
  };

  let hypertyDiscovery = new HypertyDiscovery(domain, runtimeURL, messageBus);

  describe('constructor()', function() {
    it('should create a HypertyDiscovery object without error', function() {
      expect(hypertyDiscovery.discoveryURL).to.be.equal(domain);
    });
  });

  describe('discoverHypertyPerUser()', function() {
    it('should return a Promise with an Identity using the default domain', function(done) {

      let expectedMessage = {id: 'openidtest10@gmail.com',
                            descriptor: 'hyperty-catalogue://ist.pt/.well-known/hyperty/HelloHyperty',
                            hypertyURL: 'hyperty://ist.pt/1'};

        expect(hypertyDiscovery.discoverHypertyPerUser('openidtest10@gmail.com').then(function(response) {
        console.log('Response->', response);
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

  describe('discoverHyperty()', function() {
    it('should conclude the advanced search without error', function(done) {
      let expectedMessage = {'hyperty://ist.pt/1':
                      {descriptor: 'hyperty-catalogue://ist.pt/.well-known/hyperty/HelloHyperty',
                       lastModified: '"2016-03-03T13:32:06Z"',
                       dataSchemes: ['comm'],
                       resources:   ['chat']}
      };

      expect(hypertyDiscovery.discoverHyperty('user://gmail.com/openidtest20', ['comm'], ['chat']).then(function(response) {
        return response;
      })).to.be.fulfilled.and.eventually.eql(expectedMessage).and.notify(done);
    });
  });

});

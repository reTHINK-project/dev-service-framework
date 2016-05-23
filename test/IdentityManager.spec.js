import IdentityManager from '../src/identityManager/IdentityManager';

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

let expect = chai.expect;
chai.use(chaiAsPromised);

describe('IdentityManager', function() {
  let hypertyURL = 'hyperty://localhost/526e9670-593f-4641-8b63-98fa49f933a1';
  let runtimeURL = 'runtime://localhost/1051';
  let msgBus = {
    postMessage: (msg, replyCallback) => {

      expect(msg).to.eql({
        type: 'read', from: hypertyURL, to: runtimeURL + '/registry/',
        body: { resource: '.', criteria: hypertyURL}
      });

      replyCallback({
        type: 'read', from: runtimeURL + '/registry/', to: hypertyURL,
        body: { resource: 'user://gmail.com/openidtest10'}
      });
    }
  };

  let identityManager = new IdentityManager(hypertyURL, runtimeURL, msgBus);

  describe('constructor()', function() {
    it('should create a identityManager object without error', function() {
      expect(identityManager.runtimeURL).to.be.equal(runtimeURL);
    });
  });

  describe('discoverUserRegistered()', function() {
    it('sould return a Promise with the identity associated', function(done) {
      let expectedValue = 'user://gmail.com/openidtest10';

      expect(identityManager.discoverUserRegistered().then(function(response) {
        return response;
      })).to.be.fulfilled.and.eventually.eql(expectedValue).and.notify(done);
    });

    it('sould return a Promise with the identity associated (with optional hyperty field)', function(done) {
      let expectedValue = 'user://gmail.com/openidtest10';

      expect(identityManager.discoverUserRegistered(hypertyURL).then(function(response) {
        return response;
      })).to.be.fulfilled.and.eventually.eql(expectedValue).and.notify(done);
    });

  });

});

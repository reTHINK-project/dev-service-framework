// Unit test modules
import chai from 'chai';
import sinon from 'sinon';
import chaiAsPromised from 'chai-as-promised';
import sinonChai from 'sinon-chai';

// internal modules to be tested
import {divideURL} from '../src/utils/utils';

let expect = chai.expect;

chai.config.showDiff = true;
chai.config.truncateThreshold = 0;

chai.use(chaiAsPromised);
chai.use(sinonChai);

describe('Hyperty Connector', function() {

  it.skip('Hyperty connector constructor', function() {
    expect(true).to.be.equal(true);
  });

});

// Unit test modules
import chai from 'chai';
import sinon from 'sinon';
import chaiAsPromised from 'chai-as-promised';
import sinonChai from 'sinon-chai';

// internal modules to be tested
import {divideURL} from '../src/utils/utils';
import HypertyConnector from '../src/hyperty/HypertyConnector';

let expect = chai.expect;

chai.config.showDiff = true;
chai.config.truncateThreshold = 0;

chai.use(chaiAsPromised);
chai.use(sinonChai);

describe('Hyperty Connector', function() {

  let syncher;
  before(function() {
    syncher = {};
  });

  it('Hyperty connector constructor', function() {

    console.log(RTCPeerConnection);

    //var connector = new HypertyConnector(syncher);

  });

});

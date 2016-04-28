import chai from 'chai';
import sinon from 'sinon';
import chaiAsPromised from 'chai-as-promised';
import sinonChai from 'sinon-chai';

let expect = chai.expect;

chai.config.truncateThreshold = 0;
chai.use(chaiAsPromised);
chai.use(sinonChai);

import {RuntimeCatalogueLocal} from '../src/RuntimeCatalogue';
import RuntimeFactory from './resources/RuntimeFactory';

import {divideURL} from '../src/utils/utils';

// Testing runtimeUA;
describe('Local Runtime Catalogue', function() {

  let _hypertyDescriptor;
  let _stubDescriptor;
  let type = 'https';
  let domain = 'sp.domain';
  let runtimeFactory = new RuntimeFactory();

  let runtimeCatalogue = new RuntimeCatalogueLocal(runtimeFactory);
  runtimeCatalogue.runtimeURL = domain;

  before(function() {

    let Hyperties = {
      HelloHyperty: {
        cguid:'1',
        type:'0',
        version:'0.1',
        description: 'description of Hello Hyperty',
        objectName:'HelloHyperty',
        sourcePackageURL: '/sourcePackage',
        sourcePackage: {
          sourceCode: '',
          sourceCodeClassname: 'HelloHyperty',
          encoding: 'UTF-8',
          signature: ''
        },
        language:'Javascript ECMA5',
        signature: '',
        messageSchemas:'',
        configuration:'',
        constraints:'',
        hypertyCapabilities: '',
        protocolCapabilities: '',
        policies: '',
        dataObjects:[]
      },
      WorldHyperty:{
        cguid:'2',
        type:'0',
        version:'0.1',
        description: 'description of World Hyperty',
        objectName:'WorldHyperty',
        sourcePackageURL: '/sourcePackage',
        sourcePackage: {
          sourceCode: '',
          sourceCodeClassname: 'WorldHyperty',
          encoding: 'UTF-8',
          signature: ''
        },
        language:'Javascript ECMA5',
        signature: '',
        messageSchemas:'',
        configuration:'',
        constraints:'',
        hypertyCapabilities: '',
        protocolCapabilities: '',
        policies: '',
        dataObjects:[]
      }
    };

    let ProtoStubs = {
      default: {
        cguid: '1',
        type: '0',
        version: '0.1',
        description: 'description of VertxProtoStub',
        objectName: 'VertxProtoStub',
        sourcePackageURL: '/sourcePackage',
        sourcePackage: {
          sourceCode: '',
          sourceCodeClassname: 'VertxProtoStub',
          encoding: 'Base64',
          signature: ''
        },
        language: 'Javascript ECMA5',
        signature: '',
        messageSchemas: '',
        configuration: {
          url: 'wss://127.0.0.1:9090/ws'
        },
        constraints: '',
        hypertyCapabilities: '',
        protocolCapabilities: '',
        policies: '',
        dataObjects: []
      }
    };

    sinon.stub(runtimeCatalogue, '_createHyperty', function(_this, rawHyperty) {
      return rawHyperty;
    });

    sinon.stub(runtimeCatalogue, '_createStub', function(_this, rawHyperty) {
      return rawHyperty;
    });

    sinon.stub(runtimeCatalogue, '_createRuntimeDescriptor', function(_this, rawHyperty) {
      return rawHyperty;
    });

    sinon.stub(runtimeCatalogue, '_createDataSchema', function(_this, rawHyperty) {
      return rawHyperty;
    });

    sinon.stub(runtimeCatalogue, '_createIdpProxy', function(_this, rawHyperty) {
      return rawHyperty;
    });

    sinon.stub(runtimeCatalogue, 'getHypertyDescriptor', function(hypertyURL) {
      let _this = this;
      return _this.getDescriptor(hypertyURL, runtimeCatalogue._createHyperty);
    });

    sinon.stub(runtimeCatalogue, 'getStubDescriptor', function(stubURL) {
      let _this = this;

      let dividedURL = divideURL(stubURL);
      let type = dividedURL.type;
      let domain = dividedURL.domain;
      let protostub = dividedURL.identity;

      if (!protostub) {
        protostub = 'default';
      } else {
        protostub = protostub.substring(protostub.lastIndexOf('/') + 1);
      }

      stubURL = type + '://' + domain + '/.well-known/protostub/' + protostub;

      return _this.getDescriptor(stubURL, runtimeCatalogue._createStub);
    });

    sinon.stub(runtimeCatalogue, 'getRuntimeDescriptor', function(runtimeURL) {
      let _this = this;
      return _this.getDescriptor(runtimeURL, runtimeCatalogue._createRuntimeDescriptor);
    });

    sinon.stub(runtimeCatalogue, 'getDataSchemaDescriptor', function(dataSchemaURL) {
      let _this = this;
      return _this.getDescriptor(dataSchemaURL, runtimeCatalogue._createDataSchema);
    });

    sinon.stub(runtimeCatalogue, 'getIdpProxyDescriptor', function(idpProxyURL) {
      let _this = this;
      return _this.getDescriptor(idpProxyURL, runtimeCatalogue._createIdpProxy);
    });

    sinon.stub(runtimeCatalogue, 'getDescriptor', function(url, createFunc) {

      let dividedURL = divideURL(url);
      let identity = dividedURL.identity;

      if (!identity) {
        identity = 'default';
      } else {
        identity = identity.substring(identity.lastIndexOf('/') + 1);
      }

      return new Promise(function(resolve, reject) {

        let result;

        if (url.includes('Hyperties') || url.includes('Hyperty')) {
          try {
            result = Hyperties[identity];
          } catch (e) {
            reject(e);
          }

        } else if (url.includes('ProtoStubs') || url.includes('protostub')) {
          try {
            result = ProtoStubs[identity];
          } catch (e) {
            reject(e);
          }
        }

        // console.log('creating descriptor based on: ', result);
        let descriptor = createFunc(runtimeCatalogue, result);

        // persistenceManager.set(descriptorURL, descriptor.version, result);
        // console.log('created descriptor object:', hyperty);
        resolve(descriptor);

      });
    });

  });

  after(function() {
    runtimeCatalogue.getDescriptor.restore();
  });

  it('should get hyperty descriptor', function(done) {

    let descriptorValidation = ['guid', 'type', 'version', 'objectName', 'description', 'language', 'sourcePackageURL',
    'signature', 'sourcePackage',
    'configuration', 'constraints','policies', 'messageSchema',  'hypertyType', 'dataObjects'];

    // TODO: Check the hyperty descriptor response and compare
    // with what is defined in the specification;
    let hypertyDescriptorURL = 'hyperty-catalogue://' + domain + '/HelloHyperty';
    expect(runtimeCatalogue.getHypertyDescriptor(hypertyDescriptorURL).then(function(hypertyDescriptor) {
      _hypertyDescriptor = hypertyDescriptor;
      return _hypertyDescriptor;
    }).catch(function(reason) {
      throw new Error(reason);
    }))
    .to.be.fulfilled
    .and.eventually.to.have.any.keys(descriptorValidation)
    .and.notify(done);

  });

  it('should get hyperty source code', function(done) {

    expect(runtimeCatalogue.getSourceCodeFromDescriptor(_hypertyDescriptor))
    .to.be.fulfilled.and.notify(done);

  });

  it('should get Stub descriptor', function(done) {

    //
    // guid, id, description, kind, catalogueURL,
    // sourceCode, dataObject, type, messageSchema,
    // policies, constraints, configuration,
    // hypertyCapabilities, protocolCapabilities
    //
    let descriptorValidation = ['guid',
    'type', 'version', 'description', 'objectName',
    'sourcePackageURL', 'sourcePackage',
    'language', 'signature', 'messageSchemas',
    'configuration', 'constraints'];

    // TODO: Check the hyperty descriptor response and compare
    // with what is defined in the specification;
    let domainURL = 'domain.sp';

    expect(runtimeCatalogue.getStubDescriptor(domainURL).then(function(stubDescriptor) {
      _stubDescriptor = stubDescriptor;
      return _stubDescriptor;
    }).catch(function(reason) {
      throw new Error(reason);
    }))
    .to.be.fulfilled
    .and.eventually.to.have.any.keys(descriptorValidation)
    .and.eventually.with.deep.property('configuration')
    .that.to.have.any.keys('url')
    .and.notify(done);

  });

  it('should get stub source code', function(done) {

    expect(runtimeCatalogue.getSourceCodeFromDescriptor(_stubDescriptor))
    .to.be.fulfilled.and.notify(done);

  });

});

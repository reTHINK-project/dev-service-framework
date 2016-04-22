import chai from 'chai';
import sinon from 'sinon';
import chaiAsPromised from 'chai-as-promised';
import sinonChai from 'sinon-chai';

let expect = chai.expect;

chai.config.truncateThreshold = 0;
chai.use(chaiAsPromised);
chai.use(sinonChai);

import RuntimeCatalogue from '../src/runtime-catalogue/RuntimeCatalogue-Local';
import RuntimeFactory from './resources/RuntimeFactory';

import {divideURL} from '../src/utils/utils';

// Testing runtimeUA;
describe('Local Runtime Catalogue', function() {

  let _hypertyDescriptor;
  let _stubDescriptor;
  let type = 'https';
  let domain = 'sp.domain';
  let runtimeFactory = new RuntimeFactory();

  let runtimeCatalogue = new RuntimeCatalogue(runtimeFactory);
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

    sinon.stub(runtimeCatalogue.httpRequest, 'get', function(url) {

      console.log(url.includes('Hyperties'), url.includes('ProtoStubs'));

      return new Promise(function(resolve, reject) {

        if (url.includes('Hyperties')) {
          try {
            resolve(JSON.stringify(Hyperties));
          } catch (e) {
            reject(e);
          }

        } else if (url.includes('ProtoStubs')) {
          try {
            resolve(JSON.stringify(ProtoStubs));
          } catch (e) {
            reject(e);
          }
        }
      });

    });

    sinon.stub(runtimeCatalogue, 'getSourcePackageFromURL', function(sourcePackage) {

      if (sourcePackage === '/sourcePackage') {
        return new Promise(function(resolve, reject) {
          try {
            resolve(_hypertyDescriptor._sourcePackage);
          } catch (e) {
            reject(e);
          }
        });
      }
    });

  });

  after(function() {
    runtimeCatalogue.httpRequest.get.restore();
    runtimeCatalogue.getSourcePackageFromURL.restore();
  });

  it('should get hyperty descriptor', function(done) {

    //
    // guid, id, description, kind, catalogueURL,
    // sourceCode, dataObject, type, messageSchemal,
    // policies, constraints, configuration,
    // hypertyCapabilities, protocolCapabilities
    // {
    //   _guid: '1',
    //   _type: 'hyperty',
    //   _objectName: 'HelloHyperty',
    //   _description: 'description of Hello Hyperty',
    //   _language: 'Javascript ECMA5',
    //   _sourcePackageURL: '/sourcePackage',
    //   _signature: null,
    //   _sourcePackage:
    //    { _sourceCode: '',
    //      _sourceCodeClassname: 'HelloHyperty',
    //      _encoding: 'UTF-8',
    //      _signature: null },
    //   _configuration: {},
    //   _constraints: {},
    //   _policies: {},
    //   _messageSchema: null,
    //   _hypertyType: '0',
    //   _dataObjects: []
    // }
    let descriptorValidation = ['_guid', '_type', '_version', '_objectName', '_description', '_language', '_sourcePackageURL', '_signature', '_sourcePackage', '_configuration', '_constraints','_policies', '_messageSchema',  '_hypertyType', '_dataObjects'];

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
    .and.eventually.to.have.all.keys(descriptorValidation)
    .and.notify(done);

  });

  it('should get hyperty source code', function(done) {

    let sourcePackageURL = _hypertyDescriptor._sourcePackageURL;
    expect(runtimeCatalogue.getSourcePackageFromURL(sourcePackageURL))
    .to.be.fulfilled.and.notify(done);

  });

  it('should get Stub descriptor', function(done) {

    //
    // guid, id, description, kind, catalogueURL,
    // sourceCode, dataObject, type, messageSchema,
    // policies, constraints, configuration,
    // hypertyCapabilities, protocolCapabilities
    //
    let descriptorValidation = ['_guid', '_type', '_version', '_description', '_objectName', '_sourcePackageURL', '_sourcePackage', '_language', '_signature', '_messageSchemas', '_configuration', '_constraints'];

    // TODO: Check the hyperty descriptor response and compare
    // with what is defined in the specification;
    let domainURL = 'domain.sp';

    console.log(divideURL(domainURL));

    expect(runtimeCatalogue.getStubDescriptor(domainURL).then(function(stubDescriptor) {
      console.log('stubDescriptor: ', stubDescriptor);
      _stubDescriptor = stubDescriptor;
      _stubDescriptor.configuration = JSON.parse(stubDescriptor.configuration);
      return _stubDescriptor;
    }).catch(function(reason) {
      throw new Error(reason);
    }))
    .to.be.fulfilled
    .and.eventually.to.have.all.keys(descriptorValidation)
    .and.eventually.with.deep.property('_configuration')
    .that.to.have.any.keys('url')
    .and.notify(done);

  });

  it('should get stub source code', function(done) {

    let sourcePackageURL = _stubDescriptor.sourcePackageURL;
    expect(runtimeCatalogue.getSourcePackageFromURL(sourcePackageURL))
    .to.be.fulfilled.and.notify(done);

  });

});
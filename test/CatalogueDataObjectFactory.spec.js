import CatalogueDataObjectFactory from '../src/catalogue-factory/CatalogueDataObjectFactory'
import CatalogueDataObject from '../src/catalogue-factory/CatalogueDataObject'
import RuntimeConstraint from '../src/catalogue-factory/RuntimeConstraint'
import {CatalogueObjectType} from '../src/catalogue-factory/CatalogueDataObject'
import {DataObjectSourceLanguage} from '../src/catalogue-factory/CatalogueDataObject'
import {HypertyType} from '../src/catalogue-factory/HypertyDescriptor'

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

let expect = chai.expect;
chai.use(chaiAsPromised);

//Testing the CatalogueDataObject-Factory
describe('CatalogueDataObjectFactory', function () {

    let catalogueDataObjectFactory;

    describe('constructor()', function () {

        it('should create a CatalogueDataObject-Factory object without error', function (done) {
            catalogueDataObjectFactory = new CatalogueDataObjectFactory("false", '{}');
            catalogueDataObjectFactory.validate();
            done();
        });

        it('should validate', function (done) {
            expect(catalogueDataObjectFactory.validate()).to.be.true;
            done();
        });
    });

    describe('createHypertyDescriptorObject()', function () {

        let hypertyDescriptor;

        it('should generate HypertyDescriptor', function (done) {
            hypertyDescriptor = catalogueDataObjectFactory.createHypertyDescriptorObject(
                "525f4671-ebd8-4b35-b062-5a126bf44628", "name", "description", DataObjectSourceLanguage.JAVASCRIPT_ECMA6,
                "URL", HypertyType.COMMUNICATOR, "dataObjects");
            expect(hypertyDescriptor).not.to.be.empty;
            done();
        });

        it('should be of type HYPERTY', function (done) {
            expect(hypertyDescriptor.type).to.eql(CatalogueObjectType.HYPERTY);
            done();
        });

        it('should have valid GUID', function (done) {
            let guid = hypertyDescriptor.guid;
            expect(guidCheck(guid)).to.be.true;
            done();
        })
    });

    describe('createProtoStubDescriptorObject()', function () {
        let protocolStubDescriptor;

        it('should generate ProtocolStubDescriptor', function (done) {
            protocolStubDescriptor = catalogueDataObjectFactory.createProtoStubDescriptorObject(
                "3339515e-e457-4fe0-b780-68263ca216db", "name", "description",
                DataObjectSourceLanguage.JAVASCRIPT_ECMA6, "URL", "MESSAGE SCHEMAS", "CONFIGURATION",
                new RuntimeConstraint());
            expect(protocolStubDescriptor).not.to.be.empty;
            done();
        });

        it('should be of type PROTOSTUB', function (done) {
            expect(protocolStubDescriptor.type).to.eql(CatalogueObjectType.PROTOSTUB);
            done();
        });

        it('should have valid GUID', function (done) {
            let guid = protocolStubDescriptor.guid;
            expect(guidCheck(guid)).to.be.true;
            done();
        })
    });

    describe('createPolicyEnforcerObject()', function () {
        let policyEnforcerDescriptor;

        it('should generate PolicyEnforcerDescriptor', function (done) {
            policyEnforcerDescriptor = catalogueDataObjectFactory.createPolicyEnforcerDescriptorObject(
                "5dc08572-56e5-4ad1-99c8-79c49578a5b0", "name",
                "description", DataObjectSourceLanguage.JAVASCRIPT_ECMA6, "URL", "CONFIGURATION",
                ['policy1', 'policy2', 'policy3']);
            expect(policyEnforcerDescriptor).not.to.be.empty;
            done();
        });

        it('should be of type POLICY_ENFORCER', function (done) {
            expect(policyEnforcerDescriptor.type).to.eql(CatalogueObjectType.POLICY_ENFORCER);
            done();
        });

        it('should have valid GUID', function (done) {
            let guid = policyEnforcerDescriptor.guid;
            expect(guidCheck(guid)).to.be.true;
            done();
        })
    });

    function guidCheck(guid) {
        if (typeof guid === "undefined") return false;
        else {
            //GUID should match standard RFC4122
            var match = guid.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
            return match !== null && match.length === 1;
        }
    }

    //TODO: Further test cases
});


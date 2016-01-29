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
                "525f4671-ebd8-4b35-b062-5a126bf44628", "My awesome Hyperty", "Description of Hyperty", DataObjectSourceLanguage.JAVASCRIPT_ECMA6,
                "https://example.org/my-awesome-hyperty/source", HypertyType.COMMUNICATOR, {});
            expect(hypertyDescriptor).not.to.be.empty;
            done();
        });

        it('should be of type HYPERTY', function (done) {
            expect(hypertyDescriptor.type).to.eql(CatalogueObjectType.HYPERTY);
            done();
        });

        it('testing getters/setters (name, type, messageSchema)', function (done) {
            let name = "My amazing Hyperty";
            let messageSchema = "test";
            let type = CatalogueObjectType.POLICY_ENFORCER;

            hypertyDescriptor.name = name;
            hypertyDescriptor.type = type;
            hypertyDescriptor.messageSchema = messageSchema;

            expect(hypertyDescriptor.name).to.eql(name);
            expect(hypertyDescriptor.type).to.eql(type);
            expect(hypertyDescriptor.messageSchema).to.eql(messageSchema);

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
                "3339515e-e457-4fe0-b780-68263ca216db", "My awesome Hyperty 2", "Description of Hyperty 2",
                DataObjectSourceLanguage.JAVASCRIPT_ECMA6, "https://example.org/my-awesome-hyperty-2/source", {}, {},
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
                "5dc08572-56e5-4ad1-99c8-79c49578a5b0", "My awesome Hyperty 3", "Description of Hyperty 2",
                DataObjectSourceLanguage.PYTHON, "https://example.com/my-awesome-hyperty-3/source", {},
                []);
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

    describe('createSourcePackage()', function () {
        let sourcePackage;

        it('should generate SourcePackage', function (done) {
            sourcePackage = catalogueDataObjectFactory.createSourcePackage("MyClassName", {});
            expect(sourcePackage).not.to.be.empty;
            done();
        });
    });

    describe('createCatalogueDataObject()', function () {

        let catalogueDataObject;

        it('should generate CatalogueDataObject of type HypertyDescriptor', function (done) {
            catalogueDataObject = catalogueDataObjectFactory.createCatalogueDataObject(
                "df7c7237-03e4-4547-89ca-c0c8b8d88f63", CatalogueObjectType.HYPERTY, "My awesome Hyperty 4",
                "Description of Hyperty 4", DataObjectSourceLanguage.JAVASCRIPT_ECMA6,
                "https://example.org/my-awesome-hyperty/source");
            expect(catalogueDataObject).not.to.be.empty;
            done();
        });

        it('should be of type HYPERTY', function (done) {
            expect(catalogueDataObject.type).to.eql(CatalogueObjectType.HYPERTY);
            done();
        });

        it('should have valid GUID', function (done) {
            let guid = catalogueDataObject.guid;
            expect(guidCheck(guid)).to.be.true;
            done();
        })
    });

    describe('createHypertyRuntimeDescriptorObject()', function () {
        let hypertyRuntimeDescriptor;

        it('should generate HypertyRuntimeDescriptor', function (done) {
            hypertyRuntimeDescriptor = catalogueDataObjectFactory.createHypertyRuntimeDescriptorObject(
                "b36392c3-73d4-4a63-942b-4a9c2c663eea", "My awesome Hyperty 5", "Description of Hyperty 5",
                DataObjectSourceLanguage.JAVASCRIPT_ECMA6, "https://example.org/my-awesome-hyperty-5/source", {}, {},
                {});
            expect(hypertyRuntimeDescriptor).not.to.be.empty;
            done();
        });

        it('should be of type HYPERTY_RUNTIME', function (done) {
            expect(hypertyRuntimeDescriptor.type).to.eql(CatalogueObjectType.HYPERTY_RUNTIME);
            done();
        });

        it('should have valid GUID', function (done) {
            let guid = hypertyRuntimeDescriptor.guid;
            expect(guidCheck(guid)).to.be.true;
            done();
        })
    });

    describe('createDataObjectSchema()', function () {
        let dataObjectSchema;

        it('should generate DataObjectSchema', function (done) {
            dataObjectSchema = catalogueDataObjectFactory.createDataObjectSchema(
                "b36392c3-73d4-4a63-942b-4a9c2c663eea", "My awesome Schema",
                "Description of Schema",
                DataObjectSourceLanguage.JAVASCRIPT_ECMA6, "https://example.org/my-awesome-schema/source");
            expect(dataObjectSchema).not.to.be.empty;
            done();
        });


        it('should be of type DATA_SCHEMA', function (done) {
            expect(dataObjectSchema.type).to.eql(CatalogueObjectType.DATA_SCHEMA);
            done();
        });

        it('should have valid GUID', function (done) {
            let guid = dataObjectSchema.guid;
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
});


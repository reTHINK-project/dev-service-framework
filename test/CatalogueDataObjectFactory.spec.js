import CatalogueDataObjectFactory from '../src/catalogue-factory/CatalogueDataObjectFactory'
import CatalogueDataObject from '../src/catalogue-factory/CatalogueDataObject'
import {CatalogueObjectType} from '../src/catalogue-factory/CatalogueDataObject'
import {DataObjectSourceLanguage} from '../src/catalogue-factory/CatalogueDataObject'

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

let expect = chai.expect;
chai.use(chaiAsPromised);

//Testing the CatalogueDataObject-Factory
describe('CatalogueDataObjectFactory', function () {
    describe('constructor()', function () {
        it('should create a CatalogueDataObject-Factory object without error', function (done) {
            let catalogueDataObjectFactory = new CatalogueDataObjectFactory("false", '{}');
            console.log("Created CatalogueDataObjectFactory", JSON.stringify(catalogueDataObjectFactory));
            catalogueDataObjectFactory.validate();
            done();
        });
    });

    describe('createCatalogueDataObject()', function () {
        let catalogueDataObjectFactory = new CatalogueDataObjectFactory("false", '{}');
        let catalogueDataObject;

        it('CatalogueDataObjectFactory should generate CatalogueDataObject', function (done) {
            catalogueDataObject = catalogueDataObjectFactory.createCatalogueDataObject( CatalogueObjectType.HYPERTY,
                "name", "description", DataObjectSourceLanguage.JAVASCRIPT_ECMA6, "URL");
            console.log("Created CatalogueDataObject", JSON.stringify(catalogueDataObject));
            expect(catalogueDataObject).not.to.be.empty;
            done();
        });

        it('CatalogueDataObject should be of type HYPERTY', function (done) {
            expect(catalogueDataObject.type).to.eql(CatalogueObjectType.HYPERTY);
            done();
        });

        it('CatalogueDataObject should have valid, generated GUID', function(done) {
            console.log("GUID", catalogueDataObject._guid);
            expect(catalogueDataObject._guid.to.match(
                /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
            ));
            done();
        })
    });

    //TODO: Further test cases
});


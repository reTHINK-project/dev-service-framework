import CatalogueDataObjectFactory from '../src/catalogue-factory/CatalogueDataObjectFactory'
import CatalogueDataObject from '../src/catalogue-factory/CatalogueDataObject'
import {CatalogueObjectType} from '../src/catalogue-factory/CatalogueDataObject'
import {DataObjectSourceLanguage} from '../src/catalogue-factory/CatalogueDataObject'

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

let expect = chai.expect;
chai.use(chaiAsPromised);

//Testing the CatalogueDataObject-Factory
describe('CatalogueDataObjectFactory', function() {
    describe('constructor()', function() {
        it('should create a CatalogueDataObject-Factory object without error', function(done) {
            let catalogueDataObjectFactory = new CatalogueDataObjectFactory("false", '{}');
            console.log("Created CatalogueDataObjectFactory", JSON.stringify(catalogueDataObjectFactory));
            catalogueDataObjectFactory.validate();
            done();
        });
    });

    describe('createCatalogueDataObject()', function() {
        let catalogueDataObjectFactory = new CatalogueDataObjectFactory("false", '{}');
        let catalogueDataObject;

        it('CatalogueDataObjectFactory should generate CatalogueDataObject', function(done) {
            catalogueDataObject = catalogueDataObjectFactory.createCatalogueDataObject("guid",
                CatalogueObjectType.HYPERTY, "name", "description", DataObjectSourceLanguage.JAVASCRIPT_ECMA6, "URL");
            console.log("Created CatalogueDataObject", JSON.stringify(catalogueDataObject));
            expect(catalogueDataObject).not.to.be.empty;
            done();
        });

        it('CatalogueDataObject should be of type HYPERTY', function(done) {
            expect(catalogueDataObject.type).to.eql(CatalogueObjectType.HYPERTY);
            done();
        });
    });

    //TODO: Further test cases
});


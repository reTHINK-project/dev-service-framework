import CatalogueDataObjectFactory from '../src/catalogue-factory/CatalogueDataObjectFactory'
import CatalogueDataObject from '../src/catalogue-factory/CatalogueDataObject'

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

let expect = chai.expect;
chai.use(chaiAsPromised);

//Testing the CatalogueDataObject-Factory
describe('CatalogueDataObjectFactory', function() {
    describe('constructor()', function() {
        it('should create a CatalogueDataObject-Factory object without error', function(done) {
            let catalogueDataObjectFactory = new CatalogueDataObjectFactory(/*TODO PARAMETERS*/);
            catalogueDataObjectFactory.validate();
            done();
        });
    });

    describe('createCatalogueDataObject()', function() {
        let catalogueDataObjectFactory = new CatalogueDataObjectFactory(/*TODO PARAMETERS*/);

        it('should be a CatalogueDataObject', function(done) {
            let catalogueDataObject = catalogueDataObjectFactory.createCatalogueDataObject();
            expect(catalogueDataObject).not.to.be.empty;
            done();
        });
    });
});


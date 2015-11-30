import RethinkObject from '../reTHINKObject/RethinkObject';

import CatalogueDataObject from './CatalogueDataObject';
import {CatalogueObjectType} from './CatalogueDataObject';
import {DataObjectSourceLanguage} from './CatalogueDataObject';

import SourcePackage from './SourcePackage';

import HypertyDescriptor from './HypertyDescriptor';
import {HypertyType} from './HypertyDescriptor';

import ProtocolStubDescriptor from './ProtocolStubDescriptor';

import HypertyRuntimeDescriptor from './HypertyRuntimeDescriptor';
import {RuntimeType} from './HypertyRuntimeDescriptor';
import {RuntimeProtocolCapabilityType} from './HypertyRuntimeDescriptor';
import {RuntimeHypertyCapabilityType} from './HypertyRuntimeDescriptor';

import PolicyEnforcerDescriptor from './PolicyEnforcerDescriptor';
import DataObjectSchema from './DataObjectSchema';

class CatalogueDataObjectFactory extends RethinkObject {

    /**
     * Constructor
     * @param {boolean} validation
     * @param {URL.URL } schema - link to the schema
     */
    constructor(validation, schema) {
        super(validation, schema);
    }

    createCatalogueDataObject(type, objectName, description, language, sourcePackageURL) {
        if (
            typeof type === "undefined"
            || typeof objectName === "undefined"
            || typeof description === "undefined"
            || typeof language === "undefined"
            || typeof sourcePackageURL === "undefined"
        )
            throw new Error("Invalid parameters!");
        return new CatalogueDataObject(this.guid(), type, objectName, description, language, sourcePackageURL);
    }

    createHypertyDescriptorObject(catalogueType, objectName, description, language, sourcePackageURL, hypertyType,
                                  dataObjects) {
        if (
            typeof catalogueType === "undefined"
            || typeof objectName === "undefined"
            || typeof description === "undefined"
            || typeof language === "undefined"
            || typeof sourcePackageURL === "undefined"
            || typeof hypertyType === "undefined"
            || typeof dataObjects === "undefined"
        )
            throw new Error("Invalid parameters!");
        return new HypertyDescriptor(this.guid(), catalogueType, objectName, description, language, sourcePackageURL,
            hypertyType, dataObjects);
    }

    createProtoStubDescriptorObject(type, objectName, description, language, sourcePackageURL, messageSchemas,
                                    configurationList, constraintList) {
        if (
            typeof type === "undefined"
            || typeof objectName === "undefined"
            || typeof description === "undefined"
            || typeof language === "undefined"
            || typeof sourcePackageURL === "undefined"
            || typeof messageSchemas === "undefined"
            || typeof configurationList === "undefined"
            || typeof constraintList === "undefined"
        )
            throw new Error("Invalid parameters!");
        return new ProtocolStubDescriptor(this.guid(), type, objectName, description, language, sourcePackageURL,
            messageSchemas, configurationList, constraintList);
    }

    createHypertyRuntimeDescriptorObject(catalogueType, objectName, description, language, sourcePackageURL,
                                         runtimeType, hypertyCapabilities, protocolCapabilities) {
        if (
            typeof type === "undefined"
            || typeof objectName === "undefined"
            || typeof description === "undefined"
            || typeof language === "undefined"
            || typeof sourcePackageURL === "undefined"
            || typeof runtimeType === "undefined"
            || typeof hypertyCapabilities === "undefined"
            || typeof protocolCapabilities === "undefined"
        )
            throw new Error("Invalid parameters!");

        return new HypertyRuntimeDescriptor(this.guid(), catalogueType, objectName, description, language, sourcePackageURL,
            runtimeType, hypertyCapabilities, protocolCapabilities);
    };

    createPolicyEnforcerDescriptorObject(type, objectName, description, language, sourcePackageURL, configuration,
                                         policies) {
        if (
            typeof type === "undefined"
            || typeof objectName === "undefined"
            || typeof description === "undefined"
            || typeof language === "undefined"
            || typeof sourcePackageURL === "undefined"
            || typeof configuration === "undefined"
            || typeof policies === "undefined"
        )
            throw new Error("Invalid parameters!");

        return new PolicyEnforcerDescriptor(this.guid(), type, objectName, description, language, sourcePackageURL,
            configuration, policies);
    }

    createDataObjectSchema(type, objectName, description, language, sourcePackageURL) {
        if (
            typeof type === "undefined"
            || typeof objectName === "undefined"
            || typeof description === "undefined"
            || typeof language === "undefined"
            || typeof sourcePackageURL === "undefined"
        )
            throw new Error("Invalid parameters!");

        return new DataObjectSchema(this.guid(), type, objectName, description, language, sourcePackageURL);
    }

    guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

}

export default CatalogueDataObjectFactory;
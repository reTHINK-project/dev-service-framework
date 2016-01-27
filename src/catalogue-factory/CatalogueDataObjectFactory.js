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

    createCatalogueDataObject(guid, type, objectName, description, language, sourcePackageURL) {
        if (
            typeof guid === "undefined"
            || typeof type === "undefined"
            || typeof objectName === "undefined"
            || typeof description === "undefined"
            || typeof language === "undefined"
            || typeof sourcePackageURL === "undefined"
        )
            throw new Error("Invalid parameters!");
        return new CatalogueDataObject(guid, type, objectName, description, language, sourcePackageURL);
    }

    createHypertyDescriptorObject(guid, objectName, description, language, sourcePackageURL, hypertyType,
                                  dataObjects) {
        if (
            typeof guid === "undefined"
            || typeof objectName === "undefined"
            || typeof description === "undefined"
            || typeof language === "undefined"
            || typeof sourcePackageURL === "undefined"
            || typeof hypertyType === "undefined"
            || typeof dataObjects === "undefined"
        )
            throw new Error("Invalid parameters!");
        return new HypertyDescriptor(guid, CatalogueObjectType.HYPERTY, objectName, description,
            language, sourcePackageURL, hypertyType, dataObjects);
    }

    createProtoStubDescriptorObject(guid, objectName, description, language, sourcePackageURL, messageSchemas,
                                    configuration, constraints) {
        if (
            typeof guid === "undefined"
            || typeof objectName === "undefined"
            || typeof description === "undefined"
            || typeof language === "undefined"
            || typeof sourcePackageURL === "undefined"
            || typeof messageSchemas === "undefined"
            || typeof configuration === "undefined"
            || typeof constraints === "undefined"
        )
            throw new Error("Invalid parameters!");
        return new ProtocolStubDescriptor(guid, CatalogueObjectType.PROTOSTUB, objectName, description,
            language, sourcePackageURL, messageSchemas, configuration, constraints);
    }

    createHypertyRuntimeDescriptorObject(guid, objectName, description, language, sourcePackageURL,
                                         runtimeType, hypertyCapabilities, protocolCapabilities) {
        if (
            typeof guid === "undefined"
            || typeof objectName === "undefined"
            || typeof description === "undefined"
            || typeof language === "undefined"
            || typeof sourcePackageURL === "undefined"
            || typeof runtimeType === "undefined"
            || typeof hypertyCapabilities === "undefined"
            || typeof protocolCapabilities === "undefined"
        )
            throw new Error("Invalid parameters!");

        return new HypertyRuntimeDescriptor(guid, CatalogueObjectType.HYPERTY_RUNTIME, objectName,
            description, language, sourcePackageURL, runtimeType, hypertyCapabilities, protocolCapabilities);
    }

    createPolicyEnforcerDescriptorObject(guid, objectName, description, language, sourcePackageURL, configuration,
                                         policies) {
        if (
            typeof guid === "undefined"
            || typeof objectName === "undefined"
            || typeof description === "undefined"
            || typeof language === "undefined"
            || typeof sourcePackageURL === "undefined"
            || typeof configuration === "undefined"
            || typeof policies === "undefined"
        )
            throw new Error("Invalid parameters!");

        return new PolicyEnforcerDescriptor(guid, CatalogueObjectType.POLICY_ENFORCER, objectName,
            description, language, sourcePackageURL, configuration, policies);
    }

    createDataObjectSchema(guid, type, objectName, description, language, sourcePackageURL) {
        if (
            typeof guid === "undefined"
            || typeof type === "undefined"
            || typeof objectName === "undefined"
            || typeof description === "undefined"
            || typeof language === "undefined"
            || typeof sourcePackageURL === "undefined"
        )
            throw new Error("Invalid parameters!");

        return new DataObjectSchema(guid, type, objectName, description, language, sourcePackageURL);
    }

    createSourcePackage(sourceCodeClassname, sourceCode) {
        if (
            typeof sourceCode === "undefined"
            || typeof sourceCodeClassname === "undefined"
        )
            throw new Error("Invalid parameters!");

        return new SourcePackage(sourceCodeClassname, sourceCode);

    }
}

export default CatalogueDataObjectFactory;
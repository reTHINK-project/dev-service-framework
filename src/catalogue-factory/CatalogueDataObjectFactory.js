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
        return new CatalogueDataObject(this._generateGuid(), type, objectName, description, language, sourcePackageURL);
    }

    createHypertyDescriptorObject(objectName, description, language, sourcePackageURL, hypertyType,
                                  dataObjects) {
        if (
            typeof objectName === "undefined"
            || typeof description === "undefined"
            || typeof language === "undefined"
            || typeof sourcePackageURL === "undefined"
            || typeof hypertyType === "undefined"
            || typeof dataObjects === "undefined"
        )
            throw new Error("Invalid parameters!");
        return new HypertyDescriptor(this._generateGuid(), CatalogueObjectType.HYPERTY, objectName, description,
            language, sourcePackageURL, hypertyType, dataObjects);
    }

    createProtoStubDescriptorObject(objectName, description, language, sourcePackageURL, messageSchemas,
                                    configurationList, constraintList) {
        if (
            typeof objectName === "undefined"
            || typeof description === "undefined"
            || typeof language === "undefined"
            || typeof sourcePackageURL === "undefined"
            || typeof messageSchemas === "undefined"
            || typeof configurationList === "undefined"
            || typeof constraintList === "undefined"
        )
            throw new Error("Invalid parameters!");
        return new ProtocolStubDescriptor(this._generateGuid(), CatalogueObjectType.PROTOSTUB, objectName, description,
            language, sourcePackageURL, messageSchemas, configurationList, constraintList);
    }

    createHypertyRuntimeDescriptorObject(objectName, description, language, sourcePackageURL,
                                         runtimeType, hypertyCapabilities, protocolCapabilities) {
        if (
            typeof objectName === "undefined"
            || typeof description === "undefined"
            || typeof language === "undefined"
            || typeof sourcePackageURL === "undefined"
            || typeof runtimeType === "undefined"
            || typeof hypertyCapabilities === "undefined"
            || typeof protocolCapabilities === "undefined"
        )
            throw new Error("Invalid parameters!");

        return new HypertyRuntimeDescriptor(this._generateGuid(), CatalogueObjectType.HYPERTY_RUNTIME, objectName,
            description, language, sourcePackageURL, runtimeType, hypertyCapabilities, protocolCapabilities);
    }

    createPolicyEnforcerDescriptorObject(objectName, description, language, sourcePackageURL, configuration,
                                         policies) {
        if (
            typeof objectName === "undefined"
            || typeof description === "undefined"
            || typeof language === "undefined"
            || typeof sourcePackageURL === "undefined"
            || typeof configuration === "undefined"
            || typeof policies === "undefined"
        )
            throw new Error("Invalid parameters!");

        return new PolicyEnforcerDescriptor(this._generateGuid(), CatalogueObjectType.POLICY_ENFORCER, objectName,
            description, language, sourcePackageURL, configuration, policies);
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

        return new DataObjectSchema(this._generateGuid(), type, objectName, description, language, sourcePackageURL);
    }

    _generateGuid() {
        let d = new Date().getTime();

        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
}

export default CatalogueDataObjectFactory;
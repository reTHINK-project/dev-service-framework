/**
* Copyright 2016 PT Inovação e Sistemas SA
* Copyright 2016 INESC-ID
* Copyright 2016 QUOBIS NETWORKS SL
* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
* Copyright 2016 ORANGE SA
* Copyright 2016 Deutsche Telekom AG
* Copyright 2016 Apizee
* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/

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

    /**
     * Create CatalogueDataObject
     * @param {string} guid - Catalogue Global Unique identifier of the Catalogue Object
     * @param {CatalogueObjectType} type - Indicates the type of Catalogue Data Object
     * @param {string} version - Indicates the version of Catalogue Data
     * @param {string} objectName - Human-understandable name of the catalogue object
     * @param {string} description
     * @param {DataObjectSourceLanguage} language - Programming language used in the SourcePackage
     * @param {string} sourcePackageURL - URL from where the source code package of the corresponding catalogue object can be downloaded.
     * @returns {CatalogueDataObject}
     */
    createCatalogueDataObject(guid, type, version, objectName, description, language, sourcePackageURL) {
        if (
            typeof guid === "undefined"
            || typeof type === "undefined"
            || typeof version === "undefined"
            || typeof objectName === "undefined"
            || typeof description === "undefined"
            || typeof language === "undefined"
            || typeof sourcePackageURL === "undefined"
        )
            throw new Error("Invalid parameters!");
        return new CatalogueDataObject(guid, type, version, objectName, description, language, sourcePackageURL);
    }

    /**
     * Create HypertyDescriptor
     * @param {string} guid - Catalogue Global Unique identifier of the Catalogue Object
     * @param {string} version - Indicates the version of Catalogue Data
     * @param {string} objectName - Human-understandable name of the catalogue object
     * @param {string} description
     * @param {DataObjectSourceLanguage} language - Programming language used in the SourcePackage
     * @param {string} sourcePackageURL - URL from where the source code package of the corresponding catalogue object can be downloaded.
     * @param {int} hypertyType - A tag that identifies what type of hyperty is described in the object.
     * @param {URL.URLList} dataObjects - Defines the Data Object Schemas supported by the Hyperty through a list of Catalogue URLs from where these schemas can be reached.
     * @returns {HypertyDescriptor}
     */
    createHypertyDescriptorObject(guid, version, objectName, description, language, sourcePackageURL, hypertyType,
                                  dataObjects) {
        if (
            typeof guid === "undefined"
            || typeof version === "undefined"
            || typeof objectName === "undefined"
            || typeof description === "undefined"
            || typeof language === "undefined"
            || typeof sourcePackageURL === "undefined"
            || typeof hypertyType === "undefined"
            || typeof dataObjects === "undefined"
        )
            throw new Error("Invalid parameters!");
        return new HypertyDescriptor(guid, CatalogueObjectType.HYPERTY, version, objectName, description,
            language, sourcePackageURL, hypertyType, dataObjects);
    }

    /**
     * Create ProtocolStubDescriptor
     * @param {string} guid - Catalogue Global Unique identifier of the Catalogue Object
     * @param {string} version - Indicates the version of Catalogue Data
     * @param {string} objectName - Human-understandable name of the catalogue object
     * @param {string} description
     * @param {DataObjectSourceLanguage} language - Programming language used in the SourcePackage
     * @param {string} sourcePackageURL - URL from where the source code package of the corresponding catalogue object can be downloaded.
     * @param {URL.URL} messageSchemas - Defines the Schema describing the Message Data Model used by the Hyperty through the Catalogue URL from where the Message schema can be reached. If not defined, by default it is assumed the standard Message Model is used.
     * @param configuration - Data required to configure the ProtocolStub
     * @param constraints - Describes capabilities required from the Hyperty Runtime in order to be able to execute the ProtocolStub
     * @returns {ProtocolStubDescriptor}
     */
    createProtoStubDescriptorObject(guid, version, objectName, description, language, sourcePackageURL, messageSchemas,
                                    configuration, constraints) {
        if (
            typeof guid === "undefined"
            || typeof version === "undefined"
            || typeof objectName === "undefined"
            || typeof description === "undefined"
            || typeof language === "undefined"
            || typeof sourcePackageURL === "undefined"
            || typeof messageSchemas === "undefined"
            || typeof configuration === "undefined"
            || typeof constraints === "undefined"
        )
            throw new Error("Invalid parameters!");
        return new ProtocolStubDescriptor(guid, CatalogueObjectType.PROTOSTUB, version, objectName, description,
            language, sourcePackageURL, messageSchemas, configuration, constraints);
    }

    /**
     * Create HypertyRuntimeDescriptor
     * @param {string} guid - Catalogue Global Unique identifier of the Catalogue Object
     * @param {string} version - Indicates the version of Catalogue Data
     * @param {string} objectName - Human-understandable name of the catalogue object
     * @param {string} description
     * @param {DataObjectSourceLanguage} language - Programming language used in the SourcePackage
     * @param {string} sourcePackageURL - URL from where the source code package of the corresponding catalogue object can be downloaded.
     * @param runtimeType
     * @param hypertyCapabilities - Supported capabilities to execute Hyperties
     * @param protocolCapabilities - Supported capabilities to execute Protocol Stubs
     * @returns {HypertyRuntimeDescriptor}
     */
    createHypertyRuntimeDescriptorObject(guid, version, objectName, description, language, sourcePackageURL,
                                         runtimeType, hypertyCapabilities, protocolCapabilities) {
        if (
            typeof guid === "undefined"
            || typeof version === "undefined"
            || typeof objectName === "undefined"
            || typeof description === "undefined"
            || typeof language === "undefined"
            || typeof sourcePackageURL === "undefined"
            || typeof runtimeType === "undefined"
            || typeof hypertyCapabilities === "undefined"
            || typeof protocolCapabilities === "undefined"
        )
            throw new Error("Invalid parameters!");

        return new HypertyRuntimeDescriptor(guid, CatalogueObjectType.HYPERTY_RUNTIME, version, objectName,
            description, language, sourcePackageURL, runtimeType, hypertyCapabilities, protocolCapabilities);
    }

    /**
     * Create PolicyEnforcerDescriptor
     * @param {string} guid - Catalogue Global Unique identifier of the Catalogue Object
     * @param {string} version - Indicates the version of Catalogue Data
     * @param {string} objectName - Human-understandable name of the catalogue object
     * @param {string} description
     * @param {DataObjectSourceLanguage} language - Programming language used in the SourcePackage
     * @param {string} sourcePackageURL - URL from where the source code package of the corresponding catalogue object can be downloaded.
     * @param configuration
     * @param policies
     * @returns {PolicyEnforcerDescriptor}
     */
    createPolicyEnforcerDescriptorObject(guid, version, objectName, description, language, sourcePackageURL, configuration,
                                         policies) {
        if (
            typeof guid === "undefined"
            || typeof version === "undefined"
            || typeof objectName === "undefined"
            || typeof description === "undefined"
            || typeof language === "undefined"
            || typeof sourcePackageURL === "undefined"
            || typeof configuration === "undefined"
            || typeof policies === "undefined"
        )
            throw new Error("Invalid parameters!");

        return new PolicyEnforcerDescriptor(guid, CatalogueObjectType.POLICY_ENFORCER, version, objectName,
            description, language, sourcePackageURL, configuration, policies);
    }

    /**
     * Create DataObjectSchema
     * @param {string} guid - Catalogue Global Unique identifier of the Catalogue Object
     * @param {string} version - Indicates the version of Catalogue Data
     * @param {string} objectName - Human-understandable name of the catalogue object
     * @param {string} description
     * @param {DataObjectSourceLanguage} language - Programming language used in the SourcePackage
     * @param {string} sourcePackageURL - URL from where the source code package of the corresponding catalogue object can be downloaded.
     * @returns {DataObjectSchema}
     */
    createDataObjectSchema(guid, version, objectName, description, language, sourcePackageURL) {
        if (
            typeof guid === "undefined"
            || typeof version === "undefined"
            || typeof objectName === "undefined"
            || typeof description === "undefined"
            || typeof language === "undefined"
            || typeof sourcePackageURL === "undefined"
        )
            throw new Error("Invalid parameters!");

        return new DataObjectSchema(guid, CatalogueObjectType.DATA_SCHEMA, version, objectName, description, language, sourcePackageURL);
    }

    /**
     * Create SourcePackage
     * @param sourceCodeClassname - The Class-name of the SourceCode
     * @param sourceCode - The source code of the catalogue object
     * @returns {SourcePackage}
     */
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
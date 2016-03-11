import {divideURL} from '../utils/utils';
import CatalogueFactory from '../catalogue-factory/CatalogueDataObjectFactory';
import persistenceManager from '../persistence/PersistenceManager';

class RuntimeCatalogue {

    constructor(runtimeFactory) {
        if (!runtimeFactory) throw Error('The catalogue needs the runtimeFactory');

        let _this = this;
        _this._factory = new CatalogueFactory(false, undefined);
        _this.httpRequest = runtimeFactory.createHttpRequest();
    }

    /**
     * Get a Catalogue Data Object (Descriptor) from a URL, and construct it using the provided function
     * @param {String} descriptorURL - e.g. mydomain.com/.well-known/hyperty/MyHyperty
     * @param {function} createFunc - e.g. _createHyperty
     * @returns {Promise}
     */
    getDescriptor(descriptorURL, createFunc) {
        let _this = this;
        // console.log("getDescriptor", descriptorURL);

        return new Promise(function (resolve, reject) {

            _this.httpRequest.get(descriptorURL + "/version").then(function (result) {
                if (persistenceManager.getVersion(descriptorURL) >= result) {
                    // return saved version
                    console.log("returning saved version:", persistenceManager.get(descriptorURL));
                    resolve(createFunc(_this, persistenceManager.get(descriptorURL)))
                } else {
                    // request the json
                    _this.httpRequest.get(descriptorURL).then(function (result) {
                        result = JSON.parse(result);


                        if (result["ERROR"]) {
                            // TODO handle error properly
                            reject(result);
                        } else {
                            // console.log("creating descriptor based on: ", result);
                            let descriptor = createFunc(_this, result);
                            persistenceManager.set(descriptorURL, descriptor.version, result);
                            // console.log("created descriptor object:", hyperty);
                            resolve(descriptor);
                        }
                    });
                }
            });
        });
    }

    /**
     * Get HypertyDescriptor
     * @param hypertyURL - e.g. mydomain.com/.well-known/hyperty/MyHyperty
     * @returns {Promise}
     */
    getHypertyDescriptor(hypertyURL) {
        let _this = this;
        return _this.getDescriptor(hypertyURL, _this._createHyperty)
    }

    /**
     * Get StubDescriptor
     * @param stubURL - e.g. mydomain.com/.well-known/protostub/MyProtostub
     * @returns {Promise}
     */
    getStubDescriptor(stubURL) {
        let _this = this;
        return _this.getDescriptor(runtimeURL, _this._createStub)
    }

    /**
     * Get RuntimeDescriptor
     * @param runtimeURL - e.g. mydomain.com/.well-known/runtime/MyRuntime
     * @returns {Promise}
     */
    getRuntimeDescriptor(runtimeURL) {
        let _this = this;
        return _this.getDescriptor(runtimeURL, _this._createRuntimeDescriptor)
    }

    /**
     * Get DataSchemaDescriptor
     * @param dataSchemaURL - e.g. mydomain.com/.well-known/dataschema/MyDataSchema
     * @returns {Promise}
     */
    getDataSchemaDescriptor(dataSchemaURL) {
        let _this = this;
        return _this.getDescriptor(runtimeURL, _this._createDataSchema)
    }

    /**
     * Get IDPProxyDescriptor
     * @param idpProxyURL - e.g. mydomain.com/.well-known/idp-proxy/MyProxy
     * @returns {Promise}
     */
    getIdpProxyDescriptor(idpProxyURL) {
        let _this = this;
        return _this.getDescriptor(runtimeURL, _this._createIdpProxy)
    }

    /**
     * Create HypertyDescriptor based on raw object that contains its attributes
     * @param _this
     * @param rawHyperty
     * @returns {HypertyDescriptor}
     */
    _createHyperty(_this, rawHyperty) {
        // create the descriptor
        let hyperty = _this._factory.createHypertyDescriptorObject(
            rawHyperty["cguid"],
            rawHyperty["version"],
            rawHyperty["objectName"],
            rawHyperty["description"],
            rawHyperty["language"],
            rawHyperty["sourcePackageURL"],
            rawHyperty["type"] || rawHyperty["hypertyType"],
            rawHyperty["dataObjects"]
        );

        // optional fields
        hyperty.configuration = rawHyperty["configuration"];
        hyperty.constraints = rawHyperty["constraints"];
        hyperty.messageSchema = rawHyperty["messageSchema"];
        hyperty.policies = rawHyperty["policies"];
        hyperty.signature = rawHyperty["signature"];

        // parse and attach sourcePackage
        let sourcePackage = rawHyperty["sourcePackage"];
        if (sourcePackage) {
            // console.log("hyperty has sourcePackage:", sourcePackage);
            hyperty.sourcePackage = _this._createSourcePackage(_this, sourcePackage);
        }

        return hyperty;
    }

    /**
     * Create ProtocolStubDescriptor based on raw object that contains its attributes
     * @param _this
     * @param rawStub
     * @returns {ProtocolStubDescriptor}
     */
    _createStub(_this, rawStub) {
        // console.log("creating stub descriptor based on: ", rawStub);

        // create the descriptor
        let stub = _this._factory.createProtoStubDescriptorObject(
            rawStub["cguid"],
            rawStub["version"],
            rawStub["objectName"],
            rawStub["description"],
            rawStub["language"],
            rawStub["sourcePackageURL"],
            rawStub["messageSchemas"],
            rawStub["configuration"],
            rawStub["constraints"]
        );

        // optional fields
        stub.signature = rawStub["signature"];

        // parse and attach the sourcePackage
        let sourcePackage = rawStub["sourcePackage"];
        if (sourcePackage) {
            sourcePackage = _this._createSourcePackage(_this, sourcePackage);
            stub.sourcePackage = sourcePackage;
        }

        return stub;
    }

    /**
     * Create HypertyRuntimeDescriptor based on raw object that contains its attributes
     * @param _this
     * @param rawRuntime
     * @returns {HypertyRuntimeDescriptor}
     */
    _createRuntimeDescriptor(_this, rawRuntime) {
        // parse capabilities first
        try {
            rawRuntime["hypertyCapabilities"] = JSON.parse(rawRuntime["hypertyCapabilities"]);
            rawRuntime["protocolCapabilities"] = JSON.parse(rawRuntime["protocolCapabilities"]);
        } catch (e) {
            // already json object
        }
        console.log("creating runtime descriptor based on: ", rawRuntime);


        // create the descriptor
        let runtime = _this._factory.createHypertyRuntimeDescriptorObject(
            rawRuntime["cguid"],
            rawRuntime["version"],
            rawRuntime["objectName"],
            rawRuntime["description"],
            rawRuntime["language"],
            rawRuntime["sourcePackageURL"],
            rawRuntime["type"] || rawRuntime["runtimeType"],
            rawRuntime["hypertyCapabilities"],
            rawRuntime["protocolCapabilities"]
        );

        // optional fields
        runtime.signature = rawRuntime["signature"];

        // parse and attach sourcePackage
        let sourcePackage = rawRuntime["sourcePackage"];
        if (sourcePackage) {
            // console.log("runtime has sourcePackage:", sourcePackage);
            runtime.sourcePackage = _this._createSourcePackage(_this, sourcePackage);
        }
        return runtime;
    }

    /**
     * Create DataObjectSchema based on raw object that contains its attributes
     * @param _this
     * @param rawSchema
     * @returns {DataObjectSchema}
     */
    _createDataSchema(_this, rawSchema) {
        console.log("creating dataSchema based on: ", rawSchema);

        // FIXME: accessControlPolicy field not needed?
        // create the descriptor
        let dataSchema = _this._factory.createDataObjectSchema(
            rawSchema["cguid"],
            rawSchema["version"],
            rawSchema["objectName"],
            rawSchema["description"],
            rawSchema["language"],
            rawSchema["sourcePackageURL"]
        );

        // optional fields
        dataSchema.signature = rawSchema["signature"];

        // parse and attach sourcePackage
        let sourcePackage = rawSchema["sourcePackage"];
        if (sourcePackage) {
            // console.log("dataSchema has sourcePackage:", sourcePackage);
            dataSchema.sourcePackage = _this._createSourcePackage(_this, sourcePackage);
        }

        console.log("created dataSchema descriptor object:", dataSchema);
        return dataSchema;
    }

    /**
     * Create ProtocolStubDescriptor based on raw object that contains its attributes
     * @param _this
     * @param rawProxy
     * @returns {ProtocolStubDescriptor}
     */
    _createIdpProxy(_this, rawProxy) {
        // console.log("creating idpproxy descriptor based on: ", rawProxy);

        // create the descriptor
        let idpproxy = _this._factory.createProtoStubDescriptorObject(
            rawProxy["cguid"],
            rawProxy["version"],
            rawProxy["objectName"],
            rawProxy["description"],
            rawProxy["language"],
            rawProxy["sourcePackageURL"],
            rawProxy["messageSchemas"],
            rawProxy["configuration"],
            rawProxy["constraints"]
        );

        // optional fields
        idpproxy.signature = rawProxy["signature"];

        // parse and attach the sourcePackage
        let sourcePackage = rawProxy["sourcePackage"];
        if (sourcePackage) {
            sourcePackage = _this._createSourcePackage(_this, sourcePackage);
            idpproxy.sourcePackage = sourcePackage;
        }

        return idpproxy;
    }

    _createSourcePackage(_this, sp) {
        //console.log("creating sourcePackage. factory:", factory, ", raw package:", sp);
        try {
            sp = JSON.parse(sp);
        } catch (e) {
            console.log("parsing sourcePackage failed. already parsed? -> ", sp);
        }

        // check encoding
        if (sp["encoding"] === "base64") {
            sp["sourceCode"] = atob(sp["sourceCode"]);
        }

        let sourcePackage = _this.factory.createSourcePackage(sp["sourceCodeClassname"], sp["sourceCode"]);
        if (sp["encoding"])
            sourcePackage.encoding = sp["encoding"];

        if (sp["signature"])
            sourcePackage.signature = sp["signature"];

        return sourcePackage;
    }

    /**
     * Get source Package from a URL
     * @param sourcePackageURL - e.g. mydomain.com/.well-known/hyperty/MyHyperty/sourcePackage
     * @returns {Promise}
     */
    getSourcePackageFromURL(sourcePackageURL) {
        let _this = this;

        //console.log("getting sourcePackage from:", sourcePackageURL);

        return new Promise(function (resolve, reject) {
            _this.httpRequest.get(sourcePackageURL).then(function (result) {
                //console.log("got raw sourcePackage:", result);
                if (result["ERROR"]) {
                    // TODO handle error properly
                    reject(result);
                } else {
                    result = JSON.parse(result);
                    let sourcePackage = _this._createSourcePackage(_this, result);
                    resolve(sourcePackage);
                }
            }).catch(function (reason) {
                reject(reason);
            });

        });

    }

    /**
     * Returns the sourceCode of a given descriptor
     * @param {CatalogueDataObject} descriptor - Catalogue Object that was retrieved using e.g. getHypertyDescriptor()
     * @returns {Promise}
     */
    getSourceCodeFromDescriptor(descriptor) {
        let _this = this;
        return new Promise(function (resolve, reject) {
            if (descriptor.sourcePackage) {
                //console.log("descriptor has sourcePackage");
                //console.log("returning sourceCode:", descriptor.sourcePackage.sourceCode);
                resolve(descriptor.sourcePackage.sourceCode);
            } else {
                if (persistenceManager.getVersion(descriptor.sourcePackageURL + "/sourceCode") >= descriptor.version) {
                    console.log("returning cached version from persistence manager");
                    resolve(persistenceManager.get(descriptor.sourcePackageURL + "/sourceCode"));
                } else {
                    _this.httpRequest.get(descriptor.sourcePackageURL + "/sourceCode").then(function (sourceCode) {
                        if (sourceCode["ERROR"]) {
                            // TODO handle error properly
                            reject(sourceCode);
                        } else {
                            persistenceManager.set(descriptor.sourcePackageURL + "/sourceCode", descriptor.version, sourceCode);
                            resolve(sourceCode);
                        }
                    });
                }
            }
        });
    }

    set runtimeURL(runtimeURL) {
        let _this = this;
        _this._runtimeURL = runtimeURL;
    }

    get runtimeURL() {
        let _this = this;
        return _this._runtimeURL;
    }

    deleteFromPM(url) {
        persistenceManager.delete(url);
    }

}

export default RuntimeCatalogue;

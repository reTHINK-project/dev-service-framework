import CatalogueFactory from "../catalogue-factory/CatalogueDataObjectFactory";

class RuntimeCatalogue {

    constructor(runtimeFactory) {
        if (!runtimeFactory) throw Error('The catalogue needs the runtimeFactory');

        this._factory = new CatalogueFactory(false, undefined);
        this.httpRequest = runtimeFactory.createHttpRequest();
        this.atob = runtimeFactory.atob ? runtimeFactory.atob : atob;
        this.storageManager = runtimeFactory.storageManager();
    }

    /**
     * Get a Catalogue Data Object (Descriptor) from a URL, and construct it using the provided function
     * @param {String} descriptorURL - e.g. mydomain.com/.well-known/hyperty/MyHyperty
     * @param {function} createFunc - e.g. createHyperty
     * @param {boolean} [getFull] - whether or not to get descriptor with sourcePackage, or only the descriptor part
     * @returns {Promise}
     */
    getDescriptor(descriptorURL, createFunc, getFull = true) {
        console.log("getting descriptor from:", descriptorURL);

        // some flags for optimization
        // (later the descriptor will not be saved in case both of these booleans are true)
        let isSavedDescriptor = false;
        let isCompleteDescriptor = false;

        // get raw descriptor
        // first checks if descriptor is already in localStorage (based on cguid and version)
        let descriptorPromise = Promise.all([this.httpRequest.get(descriptorURL + "/version"), this.httpRequest.get(descriptorURL + "/cguid")]).then(([version, cguid]) => {
            console.log("got version (" + version + ") and cguid (" + cguid + ") for descriptor " + descriptorURL);

            // check if same version is contained in localStorage
            return this.storageManager.getVersion(cguid).then((dbVersion) => {
                if (dbVersion >= version) {
                    console.log("storageManager contains saved version that is the same or newer than requested");
                    isSavedDescriptor = true;
                    return this.storageManager.get(cguid);
                } else {
                    console.log("storageManager does not contain saved version");
                    // no saved copy, proceed with retrieving descriptor
                    return this.httpRequest.get(descriptorURL).then((descriptor) => {
                        descriptor = JSON.parse(descriptor);
                        //console.log("got descriptor:", JSON.stringify(descriptor, null, 2));
                        if (descriptor["ERROR"]) {
                            // TODO handle error properly
                            throw new Error(descriptor);
                        } else {
                            return descriptor;
                        }
                    });
                }
            })

        }).catch((error) => {
            let errorString = "Unable to get descriptor for " + descriptorURL + ": " + error;
            console.error(errorString);
            throw new Error(errorString);
        });

        let returnPromise = descriptorPromise;

        // if getFull, attach sourcePackage
        if (getFull) {
            console.log("adding promise to attach sourcePackage");
            returnPromise = descriptorPromise.then((descriptor) => {
                if (descriptor.sourcePackage) {
                    isCompleteDescriptor = true;
                    return descriptor;
                } else {
                    isCompleteDescriptor = false;
                    return this.attachRawSourcePackage(descriptor);
                }
            })
        }

        // finally create object
        returnPromise = returnPromise.then((descriptor) => {
            // store if not saved before, or if full descriptor was requested and only partial descriptor was stored.
            if (!isSavedDescriptor || (isSavedDescriptor && !isCompleteDescriptor && getFull)) {
                this.storageManager.set(descriptor.cguid, descriptor.version, descriptor);
            }
            return createFunc.apply(this, [descriptor]);
        });

        return returnPromise;
    }

    /**
     * Uses the sourcePackageURL from the descriptor, requests the sourcePackage and attaches it to the descriptor.
     * @param {CatalogueDataObject} descriptor
     * @returns {Promise} - fulfills with complete descriptor
     */
    attachRawSourcePackage(descriptor) {
        console.log("attaching raw sourcePackage from:", descriptor.sourcePackageURL);
        return new Promise((resolve) => {
            this.httpRequest.get(descriptor.sourcePackageURL).then((sourcePackage) => {
                sourcePackage = JSON.parse(sourcePackage);
                //delete descriptor.sourcePackageURL;
                //console.log("attaching sourcePackage:", sourcePackage);
                descriptor.sourcePackage = sourcePackage;
                resolve(descriptor);
            });
        });
    }

    /**
     * Get HypertyDescriptor
     * @param hypertyURL - e.g. mydomain.com/.well-known/hyperty/MyHyperty
     * @param {boolean} [getFull] - boolean to decide to get the descriptor with the sourcePackage or (potentially) without
     * @returns {Promise}
     */
    getHypertyDescriptor(hypertyURL, getFull = true) {
        return this.getDescriptor(hypertyURL, this.createHyperty, getFull)
    }

    /**
     * Get StubDescriptor
     * @param stubURL - e.g. mydomain.com/.well-known/protostub/MyProtostub
     * @param {boolean} [getFull] - boolean to decide to get the descriptor with the sourcePackage or (potentially) without
     * @returns {Promise}
     */
    getStubDescriptor(stubURL, getFull = true) {
        return this.getDescriptor(stubURL, this.createStub, getFull)
    }

    /**
     * Get RuntimeDescriptor
     * @param runtimeURL - e.g. mydomain.com/.well-known/runtime/MyRuntime
     * @param {boolean} [getFull] - boolean to decide to get the descriptor with the sourcePackage or (potentially) without
     * @returns {Promise}
     */
    getRuntimeDescriptor(runtimeURL, getFull = true) {
        return this.getDescriptor(runtimeURL, this.createRuntimeDescriptor, getFull)
    }

    /**
     * Get DataSchemaDescriptor
     * @param dataSchemaURL - e.g. mydomain.com/.well-known/dataschema/MyDataSchema
     * @param {boolean} [getFull] - boolean to decide to get the descriptor with the sourcePackage or (potentially) without
     * @returns {Promise}
     */
    getDataSchemaDescriptor(dataSchemaURL, getFull = true) {
        return this.getDescriptor(dataSchemaURL, this.createDataSchema, getFull)
    }

    /**
     * Get IDPProxyDescriptor
     * @param idpProxyURL - e.g. mydomain.com/.well-known/idp-proxy/MyProxy
     * @param {boolean} [getFull] - boolean to decide to get the descriptor with the sourcePackage or (potentially) without
     * @returns {Promise}
     */
    getIdpProxyDescriptor(idpProxyURL, getFull = true) {
        return this.getDescriptor(idpProxyURL, this.createIdpProxy, getFull)
    }

    /**
     * Create HypertyDescriptor based on raw object that contains its attributes
     * @param {JSON} rawHyperty
     * @returns {HypertyDescriptor}
     */
    createHyperty(rawHyperty) {
        //console.log("createHyperty:", rawHyperty);
        // create the descriptor
        let hyperty = this._factory.createHypertyDescriptorObject(
            rawHyperty["cguid"],
            rawHyperty["version"],
            rawHyperty["objectName"],
            rawHyperty["description"],
            rawHyperty["language"],
            rawHyperty["sourcePackageURL"],
            rawHyperty["type"] || rawHyperty["hypertyType"],
            rawHyperty["dataObjects"]
        );
        //console.log("factory returned:", hyperty);

        // optional fields
        hyperty.configuration = rawHyperty["configuration"];
        hyperty.constraints = rawHyperty["constraints"];
        hyperty.messageSchema = rawHyperty["messageSchema"];
        hyperty.policies = rawHyperty["policies"];
        hyperty.signature = rawHyperty["signature"];

        // parse and attach sourcePackage
        let sourcePackage = rawHyperty["sourcePackage"];
        if (sourcePackage) {
            hyperty.sourcePackage = this.createSourcePackage(sourcePackage);
        }

        return hyperty;
    }

    /**
     * Create ProtocolStubDescriptor based on raw object that contains its attributes
     * @param rawStub
     * @returns {ProtocolStubDescriptor}
     */
    createStub(rawStub) {
        // console.log("creating stub descriptor based on: ", rawStub);

        // create the descriptor
        let stub = this._factory.createProtoStubDescriptorObject(
            rawStub["cguid"],
            rawStub["version"],
            rawStub["objectName"],
            rawStub["description"],
            rawStub["language"],
            rawStub["sourcePackageURL"],
            rawStub["messageSchemas"],
            rawStub["configuration"],
            rawStub["constraints"],
            rawStub["hypertyType"],
            rawStub["dataObjects"],
            rawStub["interworking"],
            rawStub["idpProxy"],
            rawStub["mutualAuthentication"]
        );

        // optional fields
        stub.signature = rawStub["signature"];

        // parse and attach the sourcePackage
        let sourcePackage = rawStub["sourcePackage"];
        if (sourcePackage) {
            stub.sourcePackage = this.createSourcePackage(sourcePackage);
        }

        return stub;
    }

    /**
     * Create HypertyRuntimeDescriptor based on raw object that contains its attributes
     * @param rawRuntime
     * @returns {HypertyRuntimeDescriptor}
     */
    createRuntimeDescriptor(rawRuntime) {
        // parse capabilities first
        try {
            rawRuntime["hypertyCapabilities"] = JSON.parse(rawRuntime["hypertyCapabilities"]);
            rawRuntime["protocolCapabilities"] = JSON.parse(rawRuntime["protocolCapabilities"]);
        } catch (e) {
            // already json object
        }
        //console.log("creating runtime descriptor based on: ", rawRuntime);


        // create the descriptor
        let runtime = this._factory.createHypertyRuntimeDescriptorObject(
            rawRuntime["cguid"],
            rawRuntime["version"],
            rawRuntime["objectName"],
            rawRuntime["description"],
            rawRuntime["language"],
            rawRuntime["sourcePackageURL"],
            rawRuntime["type"] || rawRuntime["runtimeType"],
            rawRuntime["hypertyCapabilities"],
            rawRuntime["protocolCapabilities"],
            rawRuntime["p2pHandlerStub"],
            rawRuntime["p2pRequesterStub"]
        );

        // optional fields
        runtime.signature = rawRuntime["signature"];

        // parse and attach sourcePackage
        let sourcePackage = rawRuntime["sourcePackage"];
        if (sourcePackage) {
            // console.log("runtime has sourcePackage:", sourcePackage);
            runtime.sourcePackage = this.createSourcePackage(sourcePackage);
        }
        return runtime;
    }

    /**
     * Create DataObjectSchema based on raw object that contains its attributes
     * @param rawSchema
     * @returns {DataObjectSchema}
     */
    createDataSchema(rawSchema) {
        //console.log("creating dataSchema based on: ", rawSchema);

        let dataSchema;
        //console.log('1. createMessageDataObjectSchema: ', rawSchema["accessControlPolicy"]);
        //console.log('2. createMessageDataObjectSchema: ', rawSchema["scheme"]);
        if (rawSchema["accessControlPolicy"] && rawSchema["scheme"]) {
            dataSchema = this._factory.createHypertyDataObjectSchema(
                rawSchema["cguid"],
                rawSchema["version"],
                rawSchema["objectName"],
                rawSchema["description"],
                rawSchema["language"],
                rawSchema["sourcePackageURL"],
                rawSchema["accessControlPolicy"],
                rawSchema["scheme"]
            )
        } else {
            //console.log('3. createMessageDataObjectSchema: ', rawSchema);
            dataSchema = this._factory.createMessageDataObjectSchema(
                rawSchema["cguid"],
                rawSchema["version"],
                rawSchema["objectName"],
                rawSchema["description"],
                rawSchema["language"],
                rawSchema["sourcePackageURL"]
            )
        }

        // optional fields
        dataSchema.signature = rawSchema["signature"];

        // parse and attach sourcePackage
        let sourcePackage = rawSchema["sourcePackage"];
        if (sourcePackage) {
            //console.log("dataSchema has sourcePackage:", sourcePackage);
            dataSchema.sourcePackage = this.createSourcePackage(sourcePackage);

            try {
                dataSchema.sourcePackage.sourceCode = JSON.parse(dataSchema.sourcePackage.sourceCode);
            } catch (e) {
                console.log('DataSchema Source code is already parsed');
            }

            return dataSchema;

        }
        //console.log("created dataSchema descriptor object:", dataSchema);
        return dataSchema;
    }

    /**
     * Create ProtocolStubDescriptor based on raw object that contains its attributes
     * @param rawProxy
     * @returns {ProtocolStubDescriptor}
     */
    createIdpProxy(rawProxy) {
        // console.log("creating idpproxy descriptor based on: ", rawProxy);

        // create the descriptor
        let idpproxy = this._factory.createProtoStubDescriptorObject(
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
            sourcePackage = this.createSourcePackage(sourcePackage);
            idpproxy.sourcePackage = sourcePackage;
        }

        return idpproxy;
    }

    createSourcePackage(sp) {
        //console.log("createSourcePackage:", sp);

        // check encoding
        if (sp["encoding"] === "base64") {
            sp["sourceCode"] = this.atob(sp["sourceCode"]);
        }

        let sourcePackage = this._factory.createSourcePackage(sp["sourceCodeClassname"], sp["sourceCode"]);
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
        console.log("getting sourcePackage from:", sourcePackageURL);

        return new Promise((resolve, reject) => {
            this.httpRequest.get(sourcePackageURL).then((result) => {
                //console.log("got raw sourcePackage:", result);
                if (result["ERROR"]) {
                    // TODO handle error properly
                    reject(result);
                } else {
                    result = JSON.parse(result);
                    let sourcePackage = this.createSourcePackage(result);
                    resolve(sourcePackage);
                }
            }).catch((reason) => {
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
        return new Promise((resolve, reject) => {
            if (descriptor.sourcePackage) {
                //console.log("descriptor has sourcePackage");
                //console.log("returning sourceCode:", descriptor.sourcePackage.sourceCode);
                resolve(descriptor.sourcePackage.sourceCode);
            } else {
                this.storageManager.getVersion(descriptor.sourcePackageURL + "/sourceCode").then((dbVersion) => {
                    if (dbVersion >= descriptor.version) {
                        console.log("returning cached version from storageManager");
                        this.storageManager.get(descriptor.sourcePackageURL + "/sourceCode").then((sourceCode) => {
                            resolve(sourceCode);
                        });
                    } else {
                        this.httpRequest.get(descriptor.sourcePackageURL + "/sourceCode").then((sourceCode) => {
                            if (sourceCode["ERROR"]) {
                                // TODO handle error properly
                                reject(sourceCode);
                            } else {
                                this.storageManager.set(descriptor.sourcePackageURL + "/sourceCode", descriptor.version, sourceCode);
                                resolve(sourceCode);
                            }
                        });
                    }
                })
            }
        });
    }

    set runtimeURL(runtimeURL) {
        this._runtimeURL = runtimeURL;
    }

    get runtimeURL() {
        return this._runtimeURL;
    }

    deleteFromPM(url) {
        return this.storageManager.delete(url);
    }

}

export default RuntimeCatalogue;

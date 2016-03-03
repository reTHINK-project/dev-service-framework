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

/**
 * Created by amo on 14/11/2015.
 */

import CatalogueDataObject from './CatalogueDataObject';
import RuntimeProtocolCapabilityType from './HypertyRuntimeDescriptor';

class ProtocolStubDescriptor extends CatalogueDataObject {
    constructor(guid, type, objectName, description, language, sourcePackageURL, messageSchemas, configuration,
                constraints) {
        super(guid, type, objectName, description, language, sourcePackageURL);

        this._messageSchemas = messageSchemas;
        if (configuration)
            this._configuration = configuration;
        else
            this._configuration = {};

        if (constraints)
            this._constraints = constraints;
        else
            this._constraints = {};
    }

    get messageSchemas() {
        return this._messageSchemas;
    }

    get constraints() {
        return this._constraints;
    }

    get configuration() {
        return this._configuration;
    }

    set messageSchemas(messageSchemas) {
        if (messageSchemas)
            this._messageSchemas = messageSchemas;
    }

    set constraints(constraints) {
        if (constraints)
            this._constraints = constraints;
    }

    set configuration(configuration) {
        if (configuration)
            this._configuration = configuration;
    }
}

export default ProtocolStubDescriptor;
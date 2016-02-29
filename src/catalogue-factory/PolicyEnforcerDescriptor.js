/**
 * Created by pzu on 19.11.15.
 */
import CatalogueDataObject from './CatalogueDataObject';

class PolicyEnforcerDescriptor extends CatalogueDataObject {
    constructor(guid, type, version, objectName, description, language, sourcePackageURL, configuration, policies) {
        super(guid, type, version, objectName, description, language, sourcePackageURL);

        this._configuration = configuration;
        this._policies = policies;
    }

    get configuration() {
        return this._configuration;
    }

    get policies() {
        return this._policies;
    }

    set policies(policies) {
        this._policies = policies;
    }

    set configuration(configuration) {
        this._configuration = configuration;
    }
}

export default PolicyEnforcerDescriptor;
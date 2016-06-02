import { divideURL } from '../utils/utils';
import RuntimeCatalogue from './RuntimeCatalogue';

class RuntimeCatalogueLocal extends RuntimeCatalogue {

    constructor(runtimeFactory) {
      super(runtimeFactory);
    }

    /**
     * Get a Catalogue Data Object (Descriptor) from a URL, and construct it using the provided function
     * @param {String} descriptorURL - e.g. mydomain.com/.well-known/hyperty/MyHyperty
     * @param {function} createFunc - e.g. _createHyperty
     * @returns {Promise}
     */
    getDescriptor(descriptorURL, createFunc) {
      let _this = this;

      return new Promise(function(resolve, reject) {

        let resourceURL = '';
        let dividedURL = divideURL(descriptorURL);
        let type = dividedURL.type;
        let domain = dividedURL.domain;
        let identity = dividedURL.identity;
        let resource = '';

        if (!domain) {
          domain = descriptorURL;
        }

        if (identity) {
          identity = identity.substring(identity.lastIndexOf('/') + 1);
        }

        // type + '://' + domain + '/resources/descriptors/Hyperties.json'
        // type + '://' + domain + '/resources/descriptors/Runtimes.json'
        // type + '://' + domain + '/resources/descriptors/IDPProxys.json'
        // type + '://' + domain + '/resources/descriptors/ProtoStubs.json'
        // type + '://' + domain + '/resources/descriptors/DataSchemas.json'

        console.log('DescriptorURL:', descriptorURL);

        if (descriptorURL.includes('hyperty')) {
          resource = 'Hyperties';
          resourceURL = type + '://' + domain + '/resources/descriptors/Hyperties.json';
        }

        if (descriptorURL.includes('protocolstub') || descriptorURL.includes('ProtoStubs')) {
          resource = 'ProtoStubs';
          resourceURL = type + '://' + domain + '/resources/descriptors/ProtoStubs.json';
        }

        if (descriptorURL.includes('runtime')) {
          resource = 'Runtimes';
          resourceURL = type + '://' + domain + '/resources/descriptors/Runtimes.json';
        }

        if (descriptorURL.includes('idp-proxy')) {
          resource = 'IDPProxys';
          resourceURL = type + '://' + domain + '/resources/descriptors/IDPProxys.json';
        }

        if (descriptorURL.includes('dataschema')) {
          resource = 'DataSchemas';
          resourceURL = type + '://' + domain + '/resources/descriptors/DataSchemas.json';
        }

        _this.httpRequest.get(resourceURL).then(function(descriptor) {

          try {
            _this[resource] = JSON.parse(descriptor);
          } catch (e) {
            _this[resource] = descriptor;
          }

          if (!_this[resource].hasOwnProperty(identity)) {
            reject('The ' + identity + ' is not available on ' + resource);
          }

          let result = _this[resource][identity];

          if (result.ERROR) {
            // TODO handle error properly
            reject(result);
          } else {
            // FIXME hotfix for unparsed arrays (e.g. hypertyType), will be fixed in Catalogue 1.1.0
            for (let key in result) {
              try {
                result[key] = JSON.parse(result[key]);
              } catch (e) {
                // do nothing
              }
            }

            // console.log('creating descriptor based on: ', result);
            let descriptor = createFunc(_this, result);

            // persistenceManager.set(descriptorURL, descriptor.version, result);
            // console.log('created descriptor object:', hyperty);
            resolve(descriptor);
          }
        }).catch(function(reason) {
          reject(reason);
        });
      });
    }
}

export default RuntimeCatalogueLocal;

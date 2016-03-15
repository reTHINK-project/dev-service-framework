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
* Core HypertyDiscovery interface
* Class to allow applications to search for hyperties using the message bus
*/
class HypertyDiscovery {

  /**
  * To initialise the HypertyDiscover, which will provide the support for hyperties to
  * query users registered in outside the internal core.
  * @param  {MessageBus}          msgbus                msgbus
  * @param  {RuntimeURL}          runtimeURL            runtimeURL
  */
  constructor(domain, msgBus) {
    let _this = this;
    _this.messageBus = msgBus;

    _this.domain = domain;
    _this.discoveryURL = 'hyperty://' + domain + '/hypertyDiscovery';
  }

  /**
  * function to request about users registered in domain registry, and
  * return the hyperty instance if found.
  * @param  {email}              email
  * @param  {domain}            domain (Optional)
  * @return {Promise}          Promise
  */
  discoverHypertyPerUser(email, domain) {
    let _this = this;
    let activeDomain;

    if (!domain) {
      activeDomain = _this.domain;
    } else {
      activeDomain = domain;
    }

    let activediscoveryURL = 'hyperty://' + _this.domain + '/hypertyDiscovery';
    let identityURL = 'user://' + email.substring(email.indexOf('@') + 1, email.length) + '/' + email.substring(0, email.indexOf('@'));

    // message to query domain registry, asking for a user hyperty.
    let message = {
      type: 'READ', from: activediscoveryURL, to: 'domain://registry.' + activeDomain + '/', body: { resource: identityURL}
    };

    console.log('Message: ', message, activeDomain, identityURL);

    //console.log('message READ', message);
    return new Promise(function(resolve, reject) {

      _this.messageBus.postMessage(message, (reply) => {
        console.log('message reply', reply);

        let hyperty;
        let mostRecent;
        let lastHyperty;
        let value = reply.body.value;

        for (hyperty in value) {
          if (value[hyperty].lastModified !== undefined) {
            if (mostRecent === undefined) {
              mostRecent = new Date(value[hyperty].lastModified);
              lastHyperty = hyperty;
            } else {
              let hypertyDate = new Date(value[hyperty].lastModified);
              if (mostRecent.getTime() < hypertyDate.getTime()) {
                mostRecent = hypertyDate;
                lastHyperty = hyperty;
              }
            }
          }
        }

        console.log('Last Hyperty: ', lastHyperty, mostRecent);

        let hypertyURL = lastHyperty;

        if (hypertyURL === undefined) {
          return reject('User Hyperty not found');
        }

        let idPackage = {
          id: email,
          descriptor: value[hypertyURL].descriptor,
          hypertyURL: hypertyURL
        };

        console.log('===> hypertyDiscovery messageBundle: ', idPackage);
        resolve(idPackage);
      });
    });
  }

}

export default HypertyDiscovery;

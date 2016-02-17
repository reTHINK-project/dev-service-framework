
/**
* Core HypertyDiscovery interface
* Hyperty Discovery class provides the functionality to query hyperties instances registered in Domain registry* for a given user
*/
class HypertyDiscovery {

  /**
  * To initialise the HypertyDiscover, which will provide the support for hyperties to
  * query users registered in outside the internal core.
  * @param  {RuntimeURL}          domainURL            runtimeURL
  * @param  {MessageBus}          msgBus                msgBus
  */
  constructor(domainURL, msgBus) {
    let _this = this;
    _this.messageBus = msgBus;

    _this.domain = domainURL;
    _this.discoveryURL = 'hyperty://' + domainURL + '/hypertyDisovery';
  }

  /**
  * Function to request about users registered in domain registry, and
  * return the hyperty instance if found.
  * @param  {Identity.Identity}  userIdentifier
  * @return {Promise}          Promise
  */
  discoverHypertyPerUser(userIdentifier) {
    let _this = this;
    let identityURL = 'user://' + userIdentifier.substring(userIdentifier.indexOf('@') + 1, userIdentifier.length) + '/' + userIdentifier.substring(0, userIdentifier.indexOf('@'));

    // message to query domain registry, asking for a user hyperty.
    let message = {
      type: 'READ', from: _this.discoveryURL, to: 'domain://registry.' + _this.domain + '/', body: { resource: identityURL}
    };

    return new Promise(function(resolve, reject) {

      _this.messageBus.postMessage(message, (reply) => {

        let hypertyURL = reply.body.last;

        if (hypertyURL === undefined) {
          return reject('User Hyperty not found');
        }

        let idPackage = {
          id: userIdentifier,
          descriptor: reply.body.hyperties[hypertyURL].descriptor,
          hypertyURL: hypertyURL
        };

        resolve(idPackage);
      });
    });
  }

}

export default HypertyDiscovery;

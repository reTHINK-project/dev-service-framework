/**
* Identity Provider Proxy
*/
export class IdpProxy {

  /**
  * Function to generate an identity Assertion
  * TODO add details of the implementation
  *
  * @param  {contents} The contents includes information about the identity received
  * @param  {origin} Origin parameter that identifies the origin of the RTCPeerConnection
  * @param  {usernameHint} optional usernameHint parameter
  * @return {Promise} returns a promise with an identity assertion
  */
  static generateAssertion(contents, origin, hint) {
    return new Promise(function(resolve,reject) {
      resolve('assertionGenerated ' + contents);
    });
  }

  /**
  * Function to validate an identity Assertion received
  * TODO add details of the implementation
  *
  * @param  {assertion}    Identity Assertion to be validated
  * @param  {origin}       Origin parameter that identifies the origin of the RTCPeerConnection
  * @return {Promise}      Returns a promise with the identity assertion validation result
  */
  static validateAssertion(assertion, origin) {
    return new Promise(function(resolve,reject) {
      resolve('assertionValidated');
    });
  }

  /**
  * Function to obtain an user identity
  * TODO add details of the implementation
  * @param  {scope}     Scope
  * @return {Promise} returns a promise an URL so the Identity Module can use to obtain an identity
  */
  static getIdentityAssertion(scope) {
    return new Promise(function(resolve, reject) {
      resolve('URL');

    });
  }
}

/**
* Identity Provider Proxy Protocol Stub
*/
export class IdpProxyProtoStub {

  /**
  * Constructor of the IdpProxy Stub
  * The constructor add a listener in the messageBus received and start a web worker with the idpProxy received
  *
  * @param  {URL.RuntimeURL}                            runtimeProtoStubURL runtimeProtoSubURL
  * @param  {Message.Message}                           busPostMessage     configuration
  * @param  {ProtoStubDescriptor.ConfigurationDataList} configuration      configuration
  */
 constructor(runtimeProtoStubURL, bus, config) {
   let _this = this;
   _this.runtimeProtoStubURL = runtimeProtoStubURL;
   _this.messageBus = bus;
   _this.config = config;

   _this.messageBus.addListener('domain://idpProxy', function(msg) {
     _this.requestToIdp(msg);
   });
 }

  /**
  * Function that see the intended method in the message received and call the respective function
  *
  * @param {message}  message received in the messageBus
  */
  requestToIdp(msg) {
    let _this = this;
    let params = msg.body.params;
    switch (msg.body.method) {
      case 'login':
        _this.login().then(function(value) { _this.replyMessage(msg, value);});
        break;
      case 'generateAssertion':
        _this.generate(params).then(function(value) { _this.replyMessage(msg, value);});
        break;
      case 'validateAssertion':
        _this.validate(params).then(function(value) { _this.replyMessage(msg, value);});
        break;
      default:
        break;
    }
  }

  /**
  * function that makes a request for an identity assertion to the web worker running the idpProxy
  *
  * @param  {params}  parameters received in the message. In this case contains the content, origin and usernamehint
  * @return {Promise} returns a promise with an identity assertion generate by the idpProxy
  */
  generate(params) {
    let _this = this;

    return new Promise(function(resolve,reject) {
      IdpProxy.generateAssertion('contents', 'origin', 'hint').then(function(result) {
        resolve(result);
      });
    });
  }

  /**
  * function that makes a request to validate an identity assertion to the web worker running the idpProxy
  *
  * @param  {params}  parameters received in the message. In this case contains the identity assertion and origin
  * @return {Promise} returns a promise with the identity assertion validation result, received by the idpProxy
  */
  validate(params) {
    let _this = this;

    return new Promise(function(resolve,reject) {
      IdpProxy.validateAssertion('assertion','origin').then(function(result) {
        resolve(result);
      });
    });
  }

  /**
  * function that makes a request for a user identity to the web worker running the idpProxy
  *
  * @param  {params}  parameters received in the message. In this case contains the login scope
  * @return {Promise} returns a promise an URL so the Identity Module can use to obtain an identity
  */
  login(params) {
    let _this = this;

    return new Promise(function(resolve,reject) {
      IdpProxy.getIdentityAssertion().then(function(result) {
        resolve(result);
      });
    });
  }

  /**
  * This function receives a message and a value. It replies the value to the sender of the message received
  *
  * @param  {message}   message received
  * @param  {value}     value to include in the new message to send
  */
  replyMessage(msg, value) {
    let _this = this;

    let message = {id: msg.id, type: 'response', to: msg.from, from: msg.to,
                   body: {code: 200, value: value}};

    _this.messageBus.postMessage(message);
  }
}

// export default IdpProxyProtoStub;

/**
 * To activate this protocol stub, using the same method for all protostub.
 * @param  {URL.RuntimeURL}                            runtimeProtoStubURL runtimeProtoSubURL
 * @param  {Message.Message}                           busPostMessage     configuration
 * @param  {ProtoStubDescriptor.ConfigurationDataList} configuration      configuration
 * @return {Object} Object with name and instance of ProtoStub
 */
export default function activate(url, bus, config) {
  return {
    name: 'IdpProxyProtoStub',
    instance: new IdpProxyProtoStub(url, bus, config)
  };
}

let openIDConfiguration;

let googleInfo = {
  clientSecret:          'Xx4rKucb5ZYTaXlcZX9HLfZW',
  clientID:              '808329566012-tqr8qoh111942gd2kg007t0s8f277roi.apps.googleusercontent.com',
  redirectURI:           location.href,
  issuer:                'https://accounts.google.com',
  tokenEndpoint:         'https://www.googleapis.com/oauth2/v4/token?',
  jwksUri:               'https://www.googleapis.com/oauth2/v3/certs?',
  authorisationEndpoint: 'https://accounts.google.com/o/oauth2/auth?',
  userinfo:              'https://www.googleapis.com/oauth2/v3/userinfo?access_token=',
  tokenInfo:             'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=',
  accessType:            'offline',
  type:                  'code token id_token',
  scope:                 'openid%20email%20profile',
  state:                 'state'
};

//function to parse the query string in the given URL to obatin certain values
function urlParser(url, name) {
  name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
  let regexS = '[\\#&?]' + name + '=([^&#]*)';
  let regex = new RegExp(regexS);
  let results = regex.exec(url);
  if (results === null)
  return '';
  else
  return results[1];
}

function sendHTTPRequest(method, url) {
  let xhr = new XMLHttpRequest();
  if ('withCredentials' in xhr) {
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != 'undefined') {
    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // Otherwise, CORS is not supported by the browser.
    xhr = null;
  }
  return new Promise(function(resolve,reject) {
    if (xhr) {
      xhr.onreadystatechange = function(e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            let info = JSON.parse(xhr.responseText);
            resolve(info);
          } else if (xhr.status === 400) {
            reject('There was an error processing the token');
          } else {
            reject('something else other than 200 was returned');
          }
        }
      };
      xhr.send();
    } else {
      reject('CORS not supported');
    }
  });
}

/**
* Function to exchange the code received to the id Token, access token and a refresh token
*
*/
let exchangeCode = (function(code) {
  let i = googleInfo;

  let URL = i.tokenEndpoint + 'code=' + code + '&client_id=' + i.clientID + '&client_secret=' + i.clientSecret + '&redirect_uri=' + i.redirectURI + '&grant_type=authorization_code';

  //let URL = = i.tokenEndpoint + 'client_id=' + i.clientID + '&client_secret=' + i.clientSecret + '&refresh_token=' + code + '&grant_type=refresh_token';

  return new Promise(function(resolve, reject) {
    sendHTTPRequest('POST', URL).then(function(info) {
      resolve(info);
    }, function(error) {
      reject(error);
    });

  });
});

/**
* Identity Provider Proxy
*/
let IdpProxy = {

  /**
  * Function to generate an identity Assertion
  * TODO add details of the implementation, and improve implementation
  *
  * @param  {contents} The contents includes information about the identity received
  * @param  {origin} Origin parameter that identifies the origin of the RTCPeerConnection
  * @param  {usernameHint} optional usernameHint parameter
  * @return {Promise} returns a promise with an identity assertion
  */
  generateAssertion: (contents, origin, hint) => {
    let i = googleInfo;
    let tokenID = contents;
    return new Promise(function(resolve,reject) {
      if (origin !== undefined) {
        sendHTTPRequest('GET', i.tokenInfo + tokenID).then(function(value) {
          let tokenIDJSON = value;
          let encodedContent = btoa(JSON.stringify({tokenID: tokenID, tokenIDJSON: tokenIDJSON}));
          resolve(encodedContent);
        }, function(error) {
          reject(error);
        });

      } else {
        reject('err');
      }
    });
  },

  /**
  * Function to validate an identity Assertion received
  * TODO add details of the implementation, and improve the implementation
  *
  * @param  {assertion}    Identity Assertion to be validated
  * @param  {origin}       Origin parameter that identifies the origin of the RTCPeerConnection
  * @return {Promise}      Returns a promise with the identity assertion validation result
  */
  validateAssertion: (assertion, origin) => {
    return new Promise(function(resolve,reject) {
      let i = googleInfo;

      let decodedContent = atob(assertion);
      let content = JSON.parse(decodedContent);
      sendHTTPRequest('GET', i.tokenInfo + content.tokenID).then(function(result) {

        if (JSON.stringify(result) === JSON.stringify(content.tokenIDJSON)) {
          resolve('valid');
        } else {
          reject('invalid');
        }
      }, function(err) {

        reject(err);
      });
    });
  },

  /**
  * Function to obtain an user identity
  * TODO add details of the implementation
  * @return {Promise} returns a promise an URL so the Identity Module can use to obtain an identity
  *
  * @param  {scope}     Scope
  */
  getIdentityAssertion: (contents) => {
    let i = googleInfo;

    //start the login phase
    //TODO later should be defined a better approach
    return new Promise(function(resolve, reject) {
      if (!contents) {
        /*try {
          if (window) {
            resolve('url');
          }
        } catch (error) {*/

        let requestUrl = i.authorisationEndpoint + 'scope=' + i.scope + '&client_id=' + i.clientID + '&redirect_uri=' + i.redirectURI + '&response_type=' + i.type + '&state=' + i.state + '&access_type=' + i.accessType;

        reject(requestUrl);

      //  }

      } else {
        // the request have already been made, so idpPRoxy will exchange the tokens along to the idp, to obtain the information necessary
        let accessToken = urlParser(contents, 'access_token');
        let idToken = urlParser(contents, 'id_token');
        let code = urlParser(contents, 'code');

        exchangeCode(code).then(function(value) {
          let identityBundle = {accessToken: value.access_token, idToken: value.id_token, refreshToken: value.refresh_token, tokenType: value.token_type};

          //obtain information about the user
          let infoTokenURL = i.userinfo + value.access_token;
          sendHTTPRequest('GET', infoTokenURL).then(function(infoToken) {

            //TODO delete later, and delete the need in the example
            identityBundle.token = infoToken;
            identityBundle.infoToken = infoToken;
            let idTokenURL = i.tokenInfo + value.id_token;

            //obtain information about the user idToken
            sendHTTPRequest('GET', idTokenURL).then(function(idToken) {
              identityBundle.idTokenJSON = idToken;
              resolve(identityBundle);
            }, function(e) {
              reject(e);
            });
          }, function(error) {
            reject(error);
          });
        }, function(err) {
          reject(err);
        });

      }
    });
  }
};

/**
* Identity Provider Proxy Protocol Stub
*/
class IdpProxyProtoStub {

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

   _this.messageBus.addListener('*', function(msg) {
     if (msg.to == 'domain://google.com') {
       /*let newValue = IdpProxy.generateAssertion();
       let message = {id: msg.id, type: 'response', to: msg.from, from: msg.to,
                      body: {code: 200, value: newValue, bus: bus, runtimeProtoStubURL: runtimeProtoStubURL}};

       _this.messageBus.postMessage(message);*/
       _this.requestToIdp(msg);
     }
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
        _this.login(params).then(function(value) { _this.replyMessage(msg, value);});
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
      IdpProxy.generateAssertion(params.contents, params.origin, params.usernameHint).then(function(result) {
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
      IdpProxy.validateAssertion(params.assertion, params.origin).then(function(result) {
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
      IdpProxy.getIdentityAssertion(params).then(function(result) {
        resolve(result);
      }, function(result) {

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

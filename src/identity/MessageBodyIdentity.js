/**
* The Identity info to be added to Message.Body.Identity
*/

import UserProfile from './UserProfile';

class MessageBodyIdentity {

  constructor(username, userURL, avatar, cn, locale, idp, assertion) {

    if (!idp) throw new Error('IDP should be a parameter');
    if (!username) throw new Error('username should be a parameter');

    this.idp = idp;

    if (assertion)      { this.assertion = assertion; }
    this.userProfile = new UserProfile(username, userURL, avatar, cn, locale);

  }

}


export default MessageBodyIdentity;

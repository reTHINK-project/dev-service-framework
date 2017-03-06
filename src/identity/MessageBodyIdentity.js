/**
* The Identity info to be added to Message.Body.Identity
*/

import UserProfile from './UserProfile';

class MessageBodyIdentity {

  constructor(username, userURL, avatar, cn, locale, idp, assertion) {

    this.username = username;
    this.avatar = avatar;
    this.cn = cn;
    this.locale = locale;

    if (idp)      { this.idp = idp; }

    if (assertion)      { this.assertion = assertion; }

    this.userProfile = new UserProfile(username, userURL, avatar, cn, locale);

  }

}


export default MessageBodyIdentity;

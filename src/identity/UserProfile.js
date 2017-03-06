/**
* The UserProfile according to User Identity Data Model
*/


class UserProfile {

  constructor(username, userURL, avatar, cn, locale) {

    if (username)      { this.userURL = userURL; }

    if (avatar)      { this.avatar = avatar; }

    if (cn)      { this.cn = cn; }

    if (locale)      { this.locale = locale; }

  }
}

export default UserProfile;

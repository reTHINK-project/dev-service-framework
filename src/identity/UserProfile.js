/**
* The UserProfile according to User Identity Data Model
*/


class UserProfile {

  constructor(username, userURL, avatar, cn, locale) {

    if (username)      { this._userURL = userURL; }

    if (avatar)      { this._avatar = avatar; }

    if (cn)      { this._cn = cn; }

    if (locale)      { this._locale = locale; }

  }
}

export default UserProfile;

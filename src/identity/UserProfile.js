/**
* The UserProfile according to User Identity Data Model
*/


class UserProfile {

  constructor(username, userURL, avatar, cn, locale, profile) {

    if (username) { this.username = username; }
    if (avatar) { this.avatar = avatar; }
    if (cn) { this.cn = cn; }
    if (locale) { this.locale = locale; }
    if (userURL) { this.userURL = userURL; }
    if (profile) Object.assign(this, profile);

  }
}

export default UserProfile;

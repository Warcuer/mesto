export default class UserInfo {
  constructor({ profileUserName, profileAboutUs }) {
    this._profileUserName = profileUserName;
    this._profileAboutUs = profileAboutUs;
  };

  getUserInfo() {
    return {
      userName: this._profileUserName.textContent,
      aboutUs: this._profileAboutUs.textContent,
    };
  };

  setUserInfo(data) {
    this._profileUserName.textContent = data.name;
    this._profileAboutUs.textContent = data.work;
  };
};

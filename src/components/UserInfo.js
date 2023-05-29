export default class UserInfo {
  constructor({ userName, aboutUs }) {
    this._profileUserName = userName;
    this._profileAboutUs = aboutUs;
  };

  getUserInfo() {
    return {
      userName: this._profileUserName.textContent,
      aboutUs: this._profileAboutUs.textContent
    };
  };

  setUserInfo({ userName, aboutUs }) {
    this._profileUserName.textContent = userName;
    this._profileAboutUs.textContent = aboutUs;
  };
};

export default class UserInfo {
  constructor({ profileUserName, profileAboutUs }) {
    this._profileUserName = document.querySelector(profileUserName);
    this._profileAboutUs = document.querySelector(profileAboutUs);
  };

  getUserInfo() {
    return {
      userName: this._profileUserName.textContent,
      aboutUs: this._profileAboutUs.textContent
    };
  };

  setUserInfo({ name, work  }) {
    this._profileUserName.textContent = name;
    this._profileAboutUs.textContent = work;
  };
};

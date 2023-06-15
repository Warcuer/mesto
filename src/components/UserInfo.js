export default class UserInfo {
  constructor({ userName, aboutUs, userAvatar }) {
    this._profileUserName = userName;
    this._profileAboutUs = aboutUs;
    this._profileUserAvatar = userAvatar;
  };

  getUserInfo() {
    return {
      userName: this._profileUserName.textContent,
      aboutUs: this._profileAboutUs.textContent,
      userAvatar: this._profileUserAvatar.src
    };
  };

  setUserInfo({ userName, aboutUs, userAvatar }) {
    this._profileUserName.textContent = userName;
    this._profileAboutUs.textContent = aboutUs;
    this._profileUserAvatar.src = userAvatar;
  };
};

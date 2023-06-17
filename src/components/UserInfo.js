export default class UserInfo {
  constructor({ userName, aboutUs, userAvatar }) {
    this._profileUserName = userName;
    this._profileAboutUs = aboutUs;
    this._profileUserAvatar = userAvatar;
  };

  getUserInfo() {
    return {
      name: this._profileUserName.textContent,
      about: this._profileAboutUs.textContent,
      avatar: this._profileUserAvatar.src
    };
  };

  setUserInfo({ name, about, avatar }) {
    this._profileUserName.textContent = name;
    this._profileAboutUs.textContent = about;
    this._profileUserAvatar.src = avatar;
  };
};
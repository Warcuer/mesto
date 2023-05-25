export default class UserInfo {
  constructor({profileUserName, profileAboutUs}){
    this._profileUserName = document.querySelector(profileUserName);
    this._profileAboutUs = document.querySelector(profileAboutUs);
  };

  getUserInfo() {
    return {
      userName: this._profileUserName.textContent,
      AboutUs: this._profileAboutUs.textContent
    };
  };

  setUserInfo({name, aboutUs}) {
    this._profileUserName.textContent = name;
    this._profileAboutUs.textContent = aboutUs;
  };
};
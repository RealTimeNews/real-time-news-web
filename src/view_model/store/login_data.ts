import { action } from 'mobx';

export default class LoginData {
  userName: string;
  userPassword: string;
  constructor() {
    this.userName = 'kihoonKim';
    this.userPassword = '';
  }
  getUserName() {
    return this.userName;
  }
  setUserName(name: string) {
    this.userName = name;
  }
  getUserPassword() {
    return this.userName;
  }
  setUserPassword(pw: string) {
    this.userPassword = pw;
  }

  @action clear() {
    this.userName = '';
    this.userPassword = '';
  }
}

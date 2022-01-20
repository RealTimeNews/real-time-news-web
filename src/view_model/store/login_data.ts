import { action, observable } from 'mobx';

export default class LoginData {
  @observable userName: string;
  @observable userPassword: string;
  @observable userNickname: string;

  constructor() {
    this.userName = 'kh06089';
    this.userPassword = '';
    this.userNickname = '킹기훈94';
  }

  @action clear() {
    this.userName = '';
    this.userPassword = '';
    this.userNickname = '';
  }
}

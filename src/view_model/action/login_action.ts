import { action } from 'mobx';
import MainStore from '../store/main_store';

export default class LoginAction {
  private store: MainStore;

  constructor(store: MainStore) {
    this.store = store;
  }

  @action
  deleteUserInfo() {
    this.store.loginData.clear();
  }
  @action
  setUserInfo(id: string, pw: string, nickname: string) {
    this.store.loginData.userName = id;
    this.store.loginData.userPassword = pw;
    this.store.loginData.userNickname = nickname;
  }
}

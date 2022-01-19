import LoginData from './login_data';

export default class MainStore {
  check: boolean;

  loginData: LoginData;

  constructor() {
    this.check = true;
    this.loginData = new LoginData();
  }

  public clear() {
    this.check = false;
    this.loginData.clear();
  }
}

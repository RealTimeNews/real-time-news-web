import { observer } from 'mobx-react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAction } from '../../util/action_util';
import { useStore } from '../../util/store_util';
import LoginAction from '../../view_model/action/login_action';
import LoginPresenter from './login_presenter';
import SignUpContainer from './signUp_container';

const LoginContainer = observer(() => {
  const store = useStore();
  const history = useHistory();
  const loginAction = useAction(LoginAction, store);

  const [isSignUpPopupVisible, setIsSignUpPopupVisible] = useState(false);
  const toggleSignUpPopup = () => {
    setIsSignUpPopupVisible(!isSignUpPopupVisible);
  };

  const doLogin = (id: string, pw: string) => {
    const sampleNickname =
      '익명의 ' + Math.ceil(Math.random() * 100).toString();
    loginAction.setUserInfo(id, pw, sampleNickname);
    alert('로그인 성공');
    history.push('/');
  };

  return (
    <div>
      <LoginPresenter toggleSignUpPopup={toggleSignUpPopup} doLogin={doLogin} />
      {isSignUpPopupVisible && (
        <SignUpContainer
          isVisible={isSignUpPopupVisible}
          toggleSignUpPopup={toggleSignUpPopup}
        />
      )}
    </div>
  );
});

export default LoginContainer;

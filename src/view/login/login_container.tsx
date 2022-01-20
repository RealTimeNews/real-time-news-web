import { observer } from 'mobx-react';
import { useState } from 'react';
import { useAction } from '../../util/action_util';
import { useStore } from '../../util/store_util';
import LoginAction from '../../view_model/action/login_action';
import LoginPresenter from './login_presenter';
import SignUpContainer from './signUp_container';

const LoginContainer = observer(() => {
  const store = useStore();
  const loginAction = useAction(LoginAction, store);

  const [isSignUpPopupVisible, setIsSignUpPopupVisible] = useState(false);
  const toggleSignUpPopup = () => {
    setIsSignUpPopupVisible(!isSignUpPopupVisible);
  };

  const doLogin = (id: string, pw: string) => {
    console.log(id, pw);
    const sampleNickname = '개똥이';
    loginAction.setUserInfo(id, pw, sampleNickname);
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

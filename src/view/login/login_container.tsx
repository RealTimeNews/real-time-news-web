import { useCallback, useState } from 'react';
import LoginPresenter from './login_presenter';
import SignUpContainer from './signUp_container';

export default function LoginContainer() {
  const [isSignUpPopupVisible, setIsSignUpPopupVisible] = useState(false);
  const toggleSignUpPopup = () => {
    setIsSignUpPopupVisible(!isSignUpPopupVisible);
  };

  return (
    <div>
      <LoginPresenter toggleSignUpPopup={toggleSignUpPopup} />
      {isSignUpPopupVisible && (
        <SignUpContainer
          isVisible={isSignUpPopupVisible}
          toggleSignUpPopup={toggleSignUpPopup}
        />
      )}
    </div>
  );
}

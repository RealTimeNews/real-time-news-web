import SignUpPresenter from './signUp_presenter';
import { Dialog } from '@material-ui/core';
import { observer } from 'mobx-react';

interface Props {
  isVisible: boolean;
  toggleSignUpPopup: () => void;
}

const SignUpContainer = observer(({ isVisible, toggleSignUpPopup }: Props) => {
  return (
    <Dialog open={isVisible}>
      <SignUpPresenter toggleSignUpPopup={toggleSignUpPopup} />
    </Dialog>
  );
});

export default SignUpContainer;

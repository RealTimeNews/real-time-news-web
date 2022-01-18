import SignUpPresenter from './signUp_presenter';
import { Dialog } from '@material-ui/core';

interface Props {
  isVisible: boolean;
  toggleSignUpPopup: () => void;
}

export default function SignUpContainer({
  isVisible,
  toggleSignUpPopup
}: Props) {
  return (
    <Dialog open={isVisible}>
      <SignUpPresenter toggleSignUpPopup={toggleSignUpPopup} />
    </Dialog>
  );
}

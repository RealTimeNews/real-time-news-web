import { useAction } from '../../util/action_util';
import { useStore } from '../../util/store_util';
import LoginAction from '../../view_model/action/login_action';
import { observer } from 'mobx-react';
import MainHeaderPresenter from './main_header_presenter';

const MainHeaderContainer = observer(() => {
  const store = useStore();
  const loginAction = useAction(LoginAction, store);

  const onClickLogout = () => {
    loginAction.deleteUserInfo();
  };

  return (
    <MainHeaderPresenter
      userNickname={store.loginData.userNickname}
      onClickLogout={onClickLogout}
    />
  );
});

export default MainHeaderContainer;

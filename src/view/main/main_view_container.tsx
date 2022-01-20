import { observer } from 'mobx-react';
import MainViewPresenter from './main_view_presenter';

const MainViewContainer = observer(() => {
  return <MainViewPresenter />;
});

export default MainViewContainer;

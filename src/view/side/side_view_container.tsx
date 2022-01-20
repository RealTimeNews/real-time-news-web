import { observer } from 'mobx-react';
import SideViewPresenter from './side_view_presenter';

const SideViewContainer = observer(() => {
  return <SideViewPresenter />;
});

export default SideViewContainer;

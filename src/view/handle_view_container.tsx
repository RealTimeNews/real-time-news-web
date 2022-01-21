import { Route, Switch } from 'react-router-dom';
import MainHeaderContainer from './main/main_header_container';
import SideViewContainer from './side/side_view_container';
import styles from '../css/style.module.scss';
import loadable from '@loadable/component';
import { observer } from 'mobx-react';

// Code Spliting 을 위한 @loadable/component 작업.
const MainComponent = loadable(() => import('./main/main_view_container'));
const LoginComponent = loadable(() => import('./login/login_container'));

const HandleViewContainer = observer(() => {
  return (
    <div className={styles['app']}>
      <MainHeaderContainer />
      <Switch>
        <Route exact path="/" component={MainComponent} />
        <Route path="/1" component={MainComponent} />
        <Route path="/login" component={LoginComponent} />
      </Switch>
      <SideViewContainer />
    </div>
  );
});

export default HandleViewContainer;

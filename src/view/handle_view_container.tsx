import { Route, Routes } from 'react-router-dom';
import LoginContainer from './login/login_container';
import MainViewContainer from './main/main_view_container';
import MainHeaderContainer from './main/main_header_container';
import SideViewContainer from './side/side_view_container';
import styles from '../css/style.module.scss';
import { observer } from 'mobx-react';

// ToDo : Code Spliting 을 위한 @loadable/component 작업 진행하기.

const HandleViewContainer = observer(() => {
  return (
    <div className={styles['app']}>
      <MainHeaderContainer />
      <Routes>
        <Route path="/" element={<MainViewContainer />} />
        <Route path="/1" element={<MainViewContainer />} />
        <Route path="/login" element={<LoginContainer />} />
      </Routes>
      <SideViewContainer />
    </div>
  );
});

export default HandleViewContainer;

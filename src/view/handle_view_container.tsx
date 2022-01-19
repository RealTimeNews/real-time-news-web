import { Route, Routes } from 'react-router-dom';
import LoginContainer from './login/login_container';
import MainViewContainer from './main/main_view_container';
import MainHeaderContainer from './main/main_header_container';
import SideViewContainer from './side/side_view_container';

// ToDo : Code Spliting 을 위한 @loadable/component 작업 진행하기.

export default function HandleViewContainer() {
  return (
    <div className="App">
      <MainHeaderContainer />
      <Routes>
        <Route path="/" element={<MainViewContainer />} />
        <Route path="/login" element={<LoginContainer />} />
      </Routes>
      <SideViewContainer />
    </div>
  );
}

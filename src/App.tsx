import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import MainViewContainer from './view/main/main_view_container';
import LoginContainer from './view/login/login_container';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navHeader">
          <div className="navIcon">
            <h1>리얼타임뉴스</h1>
          </div>
          <div className="navIcon">
            <Link to="./">
              <button className="NavButton"> Home </button>
            </Link>
          </div>
          <div className="navIcon">
            <Link to="./1">
              <button className="NavButton"> 1 </button>
            </Link>
          </div>
          <div className="navIconRight">
            <Link to="./login">
              <button className="NavButton"> 로그인 </button>
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<MainViewContainer />} />
          <Route path="/login" element={<LoginContainer />} />
          {/* <Route path="/1" element={<Component1 />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

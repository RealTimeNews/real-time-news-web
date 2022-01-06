import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import MainViewContainer from './view/main/main_view_container';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navHeader">
          <div className="navIcon">
            <Link to="./">
              <button> Home </button>
            </Link>
          </div>
          <div className="navIcon">
            <Link to="./1">
              <button> Page1 </button>
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<MainViewContainer />} />
          {/* <Route path="/1" element={<Component1 />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

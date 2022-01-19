import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import HandleViewContainer from './view/handle_view_container';
import { MainStoreProvider } from './util/store_util';

ReactDOM.render(
  // <React.StrictMode>
  <MainStoreProvider>
    <BrowserRouter>
      <HandleViewContainer />
    </BrowserRouter>
  </MainStoreProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

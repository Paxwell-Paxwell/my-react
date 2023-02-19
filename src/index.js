import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './page/App';
import Home from './page/Home';
import ConvertUnit from './page/ConvertUnit';
import TestEvent from './page/TestEvent';
import reportWebVitals from './test/reportWebVitals';
import Review from './page/Review';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Review />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

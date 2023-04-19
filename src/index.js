import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './page/App';
// import Home from './page/Home';
import ConvertUnit from './page/ConvertUnit';
import Shop from './page/Shop';
// import TestEvent from './page/TestEvent';
import Navbar from "./component/Navbar";
import reportWebVitals from './test/reportWebVitals';
import Review from './page/Review';
import Cart from './page/Cart';
import { Provider } from 'react-redux';
import store from './store/index'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/convert-unit" element={<ConvertUnit />} />
          <Route path="/preview" element={<Review />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/cart" element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

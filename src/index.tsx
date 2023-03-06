import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Footer } from './comp/footer';

import {Subscribe} from './comp/subscribe';
import Dropdown from './comp/drop';
import Product from './comp/pro';
;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    
    <br />


    
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Subscribe />

    <br />
    <br />
    <br />
    <br />
    <Product/>


    <br />
    <br />
    <br />
    <br />  
    <br />
    <br />
    <br />
    <br />
    <Footer></Footer>
  </React.StrictMode>
);

reportWebVitals();

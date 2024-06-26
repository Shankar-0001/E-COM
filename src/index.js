import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import * as bootstrap from 'bootstrap';
import { Fakestore } from './class-components/fakestore/fakestore';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Fakestore/>
  </React.StrictMode>
);


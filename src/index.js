import ReactDOM from 'react-dom/client';
import Header from './layout/Header';
import MainBody from './layout/MainBody';
import Footer from './layout/Footer';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container-fluid px-0'>
    <Header />
    <MainBody />
    <Footer />
    </div>
  </React.StrictMode>
);

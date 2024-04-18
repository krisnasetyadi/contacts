import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './navigation/menu-navigation';
import  { Toaster } from 'react-hot-toast';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Toaster />
    <App />
  </React.StrictMode>
);
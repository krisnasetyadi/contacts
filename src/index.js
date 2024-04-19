import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './navigation/menu-navigation';
import { Provider } from 'react-redux';
import  { Toaster } from 'react-hot-toast';
import './App.css';
import store from './stores/config'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster />
        <App />  
    </Provider>
  </React.StrictMode>
);
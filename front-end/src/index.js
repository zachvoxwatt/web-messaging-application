import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import LoginScreen from './scripts/Login'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <LoginScreen />
  </React.StrictMode>
);

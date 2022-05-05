import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
//import LoginScreen from './scripts/Login'
//import RegisterScreen from './scripts/Registration';
import ConversationScreen from './scripts/Conversation'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ConversationScreen />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN_react;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID_react;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider domain="dev-0k9oe5xx.us.auth0.com" clientId="CXhp15deosaKy7eGD2dFTXvDdOPzjdxa" redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

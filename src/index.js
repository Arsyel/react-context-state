import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { EmailProvider } from './components/context/EmailContext';
import { UserProvider } from './components/context/UserContext';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <EmailProvider>
        <App />
      </EmailProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { JobLandingProvider } from './context/context';

ReactDOM.render(
  <React.StrictMode>
    <JobLandingProvider>
      <App />
    </JobLandingProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

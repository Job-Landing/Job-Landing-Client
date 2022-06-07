import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ExampleProvider } from './context/context';

ReactDOM.render(
  <React.StrictMode>
    <ExampleProvider>
      <App />
    </ExampleProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

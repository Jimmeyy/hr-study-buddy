import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'views/App';

console.log('foo');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'views/App';

console.log('foo');
console.log('bar');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

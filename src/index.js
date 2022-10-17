import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
// import './App.css';
// import App from './App';
import Portfolio from './Portfolio';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Portfolio />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

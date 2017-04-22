import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/home';
import './styles/style.css';
ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}

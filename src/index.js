import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import articlesDev from './articles.json';

let articlesData = window.SERVER_DATA;

// Static data for development and test
if (process.env.NODE_ENV !== 'production') {
  articlesData = articlesDev;
}

ReactDOM.render(
  <App articles={articlesData} />,
  document.getElementById('root')
);

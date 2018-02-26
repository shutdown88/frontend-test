import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import articlesJson from './articles.json'

// TODO fare if env.PRODUCTION o development?
ReactDOM.render(<App articles={window.serverData || articlesJson}/>, document.getElementById('root'));

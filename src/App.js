import React, { Component } from 'react';
import './App.css';
import Article from './Article/Article'
import Post from './Post/Post'
import articles from './articles.json'

// TODO make this a functional component?
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav-container">
          <div className="nav">
            <div className="App-name">Asdrubale</div>
            <div className="App-title">Lorem ipsum dolor</div>
            <div className="App-right"></div>
          </div>
        </div>
        <div className='App-header-container'>
          <header className="App-header" />
        </div>
        <div className="content-container">
          <div className="content">
            <Post post={articles[0]}/>
          </div>
          <div className="boxes-container">
            {articles.map((a, index) => <Article article={({ index, ...a})} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

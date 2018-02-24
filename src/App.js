import React, { Component } from 'react';
import './App.css';
import Article from './Article/Article'
import Post from './Post/Post'
import articles from './articles.json'
import Waypoint from 'react-waypoint';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { navContainerFixed: true };
  }

  _handleWaypointEnter({ previousPosition, currentPosition, event }) {
    console.log('Enter', previousPosition, currentPosition)
    this.setState({ navContainerFixed: true })
  }

  _handleWaypointLeave({ previousPosition, currentPosition, event }) {
    console.log('Leave', previousPosition, currentPosition)
    this.setState({ navContainerFixed: false })
  }

  getNavContainerStyle() {
    if (this.state.navContainerFixed) {
      return {
        position: 'fixed'
      }
    } else {
      return {
        position: 'absolute',
        top: document.documentElement.scrollTop
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Waypoint 
          topOffset={-350}
          onEnter={this._handleWaypointEnter.bind(this)}
          onLeave={this._handleWaypointLeave.bind(this)}
        />
        <div className="nav-container" style={this.getNavContainerStyle()}>
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

import React, { Component } from 'react';
import './App.css';
import Article from './Article/Article'
import Post from './Post/Post'
import articles from './articles.json'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Waypoint from 'react-waypoint';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { navContainerFixed: true, imageHidden: false };
  }

  _handleWaypointEnter() {
    this.setState({ navContainerFixed: true })
  }

  _handleWaypointLeave() {
    this.setState({ navContainerFixed: false, navContainerTop: document.documentElement.scrollTop })
  }

  // TODO forse devo considerare anche il caso in cui leave perchè schermo piccolo e ho scrollato in alto?
  _handleContentWaypointEnter() {
    console.log('ContentWaypointEnter')
    this.setState({ imageHidden: false })
  }

  _handleContentWaypointLeave() {
    console.log('ContentWaypointLeave')
    this.setState({ imageHidden: true })
  }

  getNavContainerStyle() {
    if (this.state.navContainerFixed) {
      return {
        position: 'fixed'
      }
    } else {
      return {
        position: 'absolute',
        top: this.state.navContainerTop
      }
    }
  }

  // margin: -188px 64px 0 64px;
  // border-radius: 12px;
  getContentContainerStyle() {
    if (this.state.imageHidden) {
      return {
        borderRadius: '0',
        marginLeft: '0px',
        marginRight: '0px',
      }
    } else {
      return {
        borderRadius: '12px',
        marginLeft: '64px',
        marginRight: '64px',
      }
    }
  }

  render() {
    return (
      <ParallaxProvider>
      <div className="App">
        <Waypoint 
          topOffset={-275}
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
          <Waypoint 
            topOffset={268}
            onEnter={this._handleContentWaypointEnter.bind(this)}
            onLeave={this._handleContentWaypointLeave.bind(this)}
          />
          <Parallax
              offsetYMax={0}
              offsetYMin={-20}
            >
            <div className="content-container" style={this.getContentContainerStyle()}>
              <div className="content-root">
              <div className="content">
                <Post post={articles[0]}/>
              </div>
              <Parallax
                offsetYMax={150}
                offsetYMin={-40}
                slowerScrollRate={true}
              >
                <div className="boxes-container">
                  {articles.map((a, index) => <Article article={({ index, ...a})} />)}
                </div>
              </Parallax>
              </div>
            </div>
          </Parallax>
          
      </div>
      </ParallaxProvider>
    );
  }
}

export default App;

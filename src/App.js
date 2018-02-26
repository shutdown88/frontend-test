import React, { Component } from 'react';
import './App.css';
import Article from './Article/Article'
import Post from './Post/Post'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Waypoint from 'react-waypoint';

const postData = {
  heading: 'Nun ce sta\' mammà là dint\'!',
  subheading: 'Quann steva là in Honduras, steva rint a na capanna e nziemm a me ce steva.',
  content: 'E intant\' e sord tuoj nunn arrivavan. \'Na sera gli honduregni me mettetter\' nu macete n\'man e gridavan\': \'Accirel\'! Accirel\'! Je pregav\', pregav\' ca corcrun\' me venev\' a salva\', ca tu me veniv\' a salva\'! ',
  icons: ['drop', 'fire', 'paper']
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { navContainerFixed: true, imageHidden: false };

    this._handleWaypointEnter = this._handleWaypointEnter.bind(this)
    this._handleWaypointLeave = this._handleWaypointLeave.bind(this)
    this._handleContentWaypointEnter = this._handleContentWaypointEnter.bind(this)
    this._handleContentWaypointLeave = this._handleContentWaypointLeave.bind(this)
  }

  _handleWaypointEnter() {
    this.setState({ navContainerFixed: true })
  }

  _handleWaypointLeave() {
    this.setState({ navContainerFixed: false, navContainerTop: document.documentElement.scrollTop })
  }

  // TODO forse devo considerare anche il caso in cui leave perchè schermo piccolo e ho scrollato in alto?
  _handleContentWaypointEnter() {
    this.setState({ imageHidden: false })
  }

  _handleContentWaypointLeave() {
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
    const articles = this.props.articles || [];
    return (
      <ParallaxProvider>
      <div className="App">
        <Waypoint 
          topOffset={-275}
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <div className="nav-container" style={this.getNavContainerStyle()}>
          <div className="nav">
            <div className="App-name">Asdrubale</div>
            <div className="App-title">
              <span>Lorem</span> <span>ipsum</span> <span>dolor</span>
            </div>
            <div className="App-right"></div>
          </div>
        </div>
        <div className='App-header-container'>
          <header className="App-header" />
        </div>
          <Waypoint 
            topOffset={268}
            onEnter={this._handleContentWaypointEnter}
            onLeave={this._handleContentWaypointLeave}
          />
          <Parallax
              offsetYMax={0}
              offsetYMin={-20}
            >
            <div className="content-container" style={this.getContentContainerStyle()}>
              <div className="content-root">
              <div className="content">
                <Post post={postData}/>
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

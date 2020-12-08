import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import silhouette from './Assets/Sillouette - Mid Fi.png';
import background from './Assets/Title_Background.png';


class TitleHeader extends Component {
  render () {
    return (
      <div style={{color: '#781C76', backgroundImage: 'url(' + background + ')'}} className="titleHeader">
        <div style={{display: 'flex', 'justify-content': 'space-between'}}>
          <h1></h1><h1></h1>
          <h1 style={{'font-size': '54px', 'font-weight': 'bold', 'margin-top': '10px', 'margin-bottom': '0px', 'text-align': 'center'}}>Sonder</h1>
          <h1 style={{'font-size': '16px', 'margin-top': '30px', 'padding-right':
      '20px'}}>304,923 Wanderers Online</h1>
        </div>
        <h2 style = {{'font-size': '14px', padding: '20px', 'margin-top': '0px'}}>“the realization that each random passerby is living a life as vivid and complex as your own... an epic story that continues invisibly around you...in which you might appear only once...as an extra sipping coffee in the background,...as a lighted window at dusk.”</h2>
        <h2>testing</h2>
      </div>
    );
  }
}

class DetailsBanner extends Component {
  render() {
    return (
      <div style={{display: 'flex', 'justify-content': 'space-between', color: '#781C76', 'background-color': 'rgba(199, 89, 75, 0.3)'}}>
        <YourPlaying/>
        <YourHeader/>
        <YourLikes/>
        <YourHistory/>
        <YourChats/>
      </div>

    );
  }
}

class YourPlaying extends Component {
  render() {
    return (
      <div style={{width: '50%'}}>
        <p>Album Cover</p>
        <p>Song Title</p>
        <p>Artist Name</p>
        <p>Playing bar</p>
      </div>
    );
  }
}

class YourHeader extends Component {
  render() {
    return (
      <div style={{width: '20%'}}>
        <h3 style={{'font-weight': 'bold'}}>Wanderer_soul</h3>
        <p>32 hours wandered | </p>
        <p>14 songs liked by other wanderers</p>
      </div>
    );
  }
}

class YourLikes extends Component {
  render() {
    return (
      <h4 style={{width: '10%'}}>Your Likes</h4>
    );
  }
}

class YourHistory extends Component {
  render () {
    return (
      <h4 style={{width: '10%'}}>Your History</h4>
    );
  }
}

class YourChats extends Component {
  render() {
    return (
      <h4 style={{width: '10%'}}>Your Chats</h4>
    );
  }
}

class HoverDetail extends Component {

}



class Silhouette extends Component {
  render() {
    return (
      <img src={silhouette}/>
    )
  }


}


class App extends Component {
  render() {
    let name = 'Jenny'
    let purple = '#82317D'
    let headerStyle = {color: purple, 'font-size': '50px'}
    return (
      <div className="App">
        <div className="Sonder-title">

        </div>
        <TitleHeader/>
        <Silhouette/>
        <Silhouette/>
        <Silhouette/>
        <Silhouette/>
        <DetailsBanner/>


      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LikeDislike from './components/LikeDislikeComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Like/Dislike Component</h1>
          <LikeDislike showLike={true} showDislike={true} />
      </div>
    );
  }
}

export default App;

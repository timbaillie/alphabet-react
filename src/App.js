import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScoreBoard from './components/ScoreBoard/ScoreBoard'
import RaceTrack from './components/RaceTrack/RaceTrack'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>in the beginning there was the alphabet...</p>
        <ScoreBoard />
        <RaceTrack />
      </div>
    );
  }
}

export default App;

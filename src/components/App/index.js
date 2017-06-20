import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from '../Header'
import RaceTrack from '../RaceTrack'

class App extends Component {
    
    render() {
        return (
            <div className="App">
                <Header headline="in the beginning there was the alphabet..." />
                <RaceTrack />
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import StarWars from './Components/StarWars'
import './App.css';
import charData from './assets/data.js'

class App extends Component {
  render() {
    return (
        <StarWars data={charData} />
    );
  }
}

export default App;

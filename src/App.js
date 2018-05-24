import React, { Component } from 'react';
import logo from './logo.svg';
import StarWars from './Components/StarWars'
import './App.css';
import charData from './assets/data.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <StarWars data={charData} />
      </div>
    );
  }
}

export default App;

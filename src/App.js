import React, { Component } from 'react';

import TitleComponent from './components/TitleComponent/TitleComponent.js';
import ButtonComponent from './components/ButtonComponent/ButtonComponent.js';

import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Get your Ron Swanson\'s Quote!'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TitleComponent title={this.state.title}/>
        </header>
        <div className="App-intro">
          <ButtonComponent/>
        </div>
      </div>
    );
  }
}

export default App;

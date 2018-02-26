import React, { Component } from 'react';

import TitleComponent from './components/TitleComponent/TitleComponent.js';
import ButtonComponent from './components/ButtonComponent/ButtonComponent.js';
import QuoteComponent from './components/QuoteComponent/QuoteComponent.js';

import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Get your Ron Swanson\'s Quote!',
      quote: ''
    }
    this.getQuote = this.getQuote.bind(this);
    this.disableButton = false;
  }

  getQuote() {
    this.setState({
      disableButton: true
    });
    fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then((response) => {
      return response.json();
    }).then((quote) => {
      this.setState({
        quote,
        disableButton: false
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TitleComponent title={this.state.title}/>
        </header>
        <div className="App-intro">
          <ButtonComponent onClickQuote={this.getQuote} disabled={this.state.disableButton}/>
          <QuoteComponent quote={this.state.quote} />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import { SpecieList } from './species/SpecieList';
import { Cart } from './cart/Cart';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pokemon Adoption</h1>
          <Cart />
        </header>
        <SpecieList />
        <p className="App-intro">
          Don't buy adopt!
        </p>
      </div>
    );
  }
}

export default App;

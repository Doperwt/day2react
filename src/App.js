import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './component/title';
class App extends Component {
  render() {
    return (
      <div>
        <Title content="All Recipes" />
      </div>
    );
  }
}
export default App;

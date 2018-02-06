import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './component/Title';
import RecipesContainer from './recipes/RecipesContainer'
class App extends Component {
  render() {
    return (
      <div>
        <Title content="All Recipes" />
        <RecipesContainer recipes= { []} />
      </div>
    );
  }
}
export default App;

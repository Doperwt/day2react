import React, { Component } from 'react';
import './App.css';
import Title from './component/Title';
import RecipesContainer from './recipes/RecipesContainer'




class App extends Component {

  updateRecipe = (_id, updates) => {

  }

  render() {
    return (
      <div>
        <Title content='All Recipes' />
        <RecipesContainer updateRecipe={this.updateRecipe}  />
      </div>
    );
  }
}
export default App;

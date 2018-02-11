import React, { Component } from 'react';
import './App.css';
import Title from './component/Title';
import RecipesContainer from './recipes/RecipesContainer'




class App extends Component {



  render() {
    return (
      <div>
        <Title content='All Recipes' />
        <RecipesContainer   />
      </div>
    );
  }
}
export default App;

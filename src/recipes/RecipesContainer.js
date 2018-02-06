import React, { PureComponent } from 'react'
import Title from "../component/Title"
import RecipeItem from "./RecipeItem"

class RecipesContainer extends PureComponent {
  renderRecipe(recipe, index) {
    return <RecipeItem key={index} { ...recipe} />
  }

  render(){
    return(
      <div className="recipes wrapper">
        <header>
          <Title content="Recipes" />
        </header>

        <main>
          { this.props.recipes.map(this.renderRecipe)}
        </main>
      </div>
    )
  }
}
export default RecipesContainer

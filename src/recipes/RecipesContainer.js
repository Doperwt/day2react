import React, { PureComponent } from 'react'
import Title from "../component/Title"
import RecipeItem from "./RecipeItem"
import PropTypes from "prop-types"

class RecipesContainer extends PureComponent {
  static propType = {
    recipes: PropTypes.string.isRequired,
    updateRecipe: PropTypes.func.isRequired
  }
  renderRecipe(recipe, index) {
    return <RecipeItem key={index} { ...recipe} updateRecipe={this.props.updateRecipe} />
  }
  // updateItem(){
  //   console.log(this.props)
  //   const { _id, liked} = this.props
  //   this.updateRecipe(_id,{ liked: !liked } )
  // }

  render(){
    return(
      <div className="recipes wrapper">
        <header>
          <Title content="Recipes" />
        </header>
        <main onChange={this.updateRecipe}>
          { this.props.recipes.map(this.renderRecipe.bind(this))}
        </main>
      </div>
    )
  }
}
export default RecipesContainer

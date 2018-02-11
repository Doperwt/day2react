import React, { PureComponent } from 'react'
import Title from '../component/Title'
import RecipeItem from './RecipeItem'
import PropTypes from 'prop-types'
import { connect} from 'react-redux'

class RecipesContainer extends PureComponent {
  static propType = {
    recipes: PropTypes.string.isRequired,
  }
  renderRecipe(recipe, index) {
    return <RecipeItem key={index} { ...recipe}  />
  }
  // updateItem(){
  //   console.log(this.props)
  //   const { _id, liked} = this.props
  //   this.updateRecipe(_id,{ liked: !liked } )
  // }

  render(){
    return(
      <div className='recipes wrapper'>
        <header>
          <Title content='Recipes' />
        </header>
        <main >
          { this.props.recipes.map(this.renderRecipe.bind(this))}
        </main>
      </div>
    )
  }
}
const mapStateToProps = ({ recipes }) => ({ recipes})

export default connect(mapStateToProps)(RecipesContainer)

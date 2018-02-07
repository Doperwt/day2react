import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Pescatarian from '../images/pescatarian.svg'
import Vegan from '../images/vegan.svg'
import Vegetarian from '../images/vegetarian.svg'
import LikeButton from '../component/LikeButton'

class RecipeItem extends PureComponent{
  static propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  vegan: PropTypes.bool,
  vegetarian: PropTypes.bool,
  pescatarian: PropTypes.bool,
  liked: PropTypes.bool,
  updateRecipe: PropTypes.func.isRequired
  }
  toggleLike(){
    const { updateRecipe, _id, liked } = this.props
    updateRecipe(_id, { liked: !liked })
   }
  render(){
    console.log(this)
    const { title, summary,vegan,vegetarian,pescatarian, liked} = this.props
    return(
      <article className="recipe" onChange={this.handleChange}>
        <h1>{ title }</h1>
        <div>
          <p>{summary}</p>
          <ul>
            {pescatarian && <li><img src={Pescatarian} alt="pescatarian"/></li>}
            {vegan && <li><img src={Vegan} alt="vegan" /></li>}
            {vegetarian &&<li><img src={Vegetarian} alt="vegetarian" /></li>}
          </ul>
          <LikeButton liked={liked} onChange={this.toggleLike.bind(this)} />
        </div>
      </article>
     )
  }
}
export default RecipeItem

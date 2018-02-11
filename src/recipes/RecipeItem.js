import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Pescatarian from '../images/pescatarian.svg'
import Vegan from '../images/vegan.svg'
import Vegetarian from '../images/vegetarian.svg'
import LikeButton from '../component/LikeButton'
import { connect } from 'react-redux'
import likeRecipe from '../actions/recipes/like'

class RecipeItem extends PureComponent{
  static propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  vegan: PropTypes.bool,
  vegetarian: PropTypes.bool,
  pescatarian: PropTypes.bool,
  liked: PropTypes.bool,
  }

  toggleLike(){
    const {  _id } = this.props
    this.props.likeRecipe(_id)
    }
   

  render(){
    const { title, summary,vegan,vegetarian,pescatarian, liked} = this.props
    return(
      <article className='recipe' onChange={this.handleChange}>
        <h1>{ title }</h1>
        <div>
          <p>{summary}</p>
          <ul>
            {pescatarian && <li><img src={Pescatarian} alt='pescatarian'/></li>}
            {vegan && <li><img src={Vegan} alt='vegan' /></li>}
            {vegetarian &&<li><img src={Vegetarian} alt='vegetarian' /></li>}
          </ul>
          <LikeButton liked={liked} onChange={this.toggleLike.bind(this)} />
        </div>
      </article>
     )
  }
}

export default connect(null, {likeRecipe})(RecipeItem)

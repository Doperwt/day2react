import React, {PureComponent} from 'react'

class RecipeItem extends PureComponent{
  render(){
    const { title, summary,vegan,vegetarian,pescatarian} = this.props
    return(
      <article className="recipe">
        <h1>{ title }</h1>
        <div>
          <p>{summary}</p>
          <ul>
            {pescatarian && <li><span role="img" aria-label="vegan">🐟</span></li>}
            {vegan && <li><span role="img" aria-label="vegan">🌾</span></li>}
            {vegetarian &&<li><span role="img" aria-label="vegan">🥕</span></li>}
          </ul>
        </div>
      </article>
     )
  }
}
export default RecipeItem

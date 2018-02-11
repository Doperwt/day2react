import React from 'react'
import { shallow } from 'enzyme'
import RecipeItem from './RecipeItem'
import Pescatarian from '../images/pescatarian.svg'
import Vegan from '../images/vegan.svg'
import Vegetarian from '../images/vegetarian.svg'

const recipe = {
   title: 'Spanish Omelette',
   summary: 'A traditional dish from Spanish cuisine called tortilla española or tortilla de patatas. It is an omelette made with eggs and potatoes, sometimes also with onion and/or chives or garlic; fried in oil and often served cold as an appetizer.',
   vegan: false,
   vegetarian: true,
   pescatarian: false,
}

describe('<RecipeItem />', () => {
  const container = shallow(<RecipeItem { ...recipe} />)

  it('is wrapped in an article tag with class name "recipe"', () =>{
    expect(container).toHaveTagName('article')
    expect(container).toHaveClassName('recipe')
  })
  it('contains the title', () => {
    expect(container.find('h1')).toHaveText(recipe.title)
  })
  it('show a 🥕 when it is vegetarian', () => {
    expect(container.find("ul > li > img")).toHaveProp('src',Vegetarian)
  })

  it('show a 🌾 when it is vegan', () => {
    recipe.vegan = true
    recipe.vegetarian = false
    const veganContainer =  shallow(<RecipeItem { ...recipe} />)
    expect(veganContainer.find("ul > li > img")).toHaveProp('src',Vegan)
  })
  it('show a 🐟 when it is pescatarian', () => {
    recipe.pescatarian = true
    recipe.vegetarian = false
    recipe.vegan = false

    const pescatarianContainer =  shallow(<RecipeItem { ...recipe} />)
    expect(pescatarianContainer.find("ul > li > img")).toHaveProp('src',Pescatarian)
  })
})

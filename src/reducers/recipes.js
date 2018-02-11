import recipes from '../fixtures/recipes'
import { RECIPE_LIKE } from '../actions/recipes/like'
import { CREATE_RECIPE } from '../actions/recipes/create'
export default (state =recipes, {type, payload} = {} ) => {
  switch ( type){
    case 'RECIPE_SEED' :
      return payload

    case RECIPE_LIKE :
       const _id = payload._id
       let newState =  state.map((recipe)=>{
         if(_id === recipe._id) {recipe.liked = !recipe.liked }
         return recipe
       })
       return newState
       
    case CREATE_RECIPE :
      return [Object.assign({}, payload)].concat(state)


    default :
      return state  }
}

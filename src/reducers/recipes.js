import recipes from '../fixtures/recipes'


export default function(state =recipes, {type, payload} = {} ) {
  switch ( type){
    case 'RECIPE_SEED' :
      return payload

    default :
      return state  }
}

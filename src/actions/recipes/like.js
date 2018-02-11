export const RECIPE_LIKE = "RECIPE_LIKE"

export default (_id) => {
  return {
    type: RECIPE_LIKE,
    payload: {
      _id: _id,
    }}
}

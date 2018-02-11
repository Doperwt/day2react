import recipes from './recipes'
describe('recipes reducers', () => {
  const reducer = recipes
  const initialState = []
  it('returns an empty array for the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })
})

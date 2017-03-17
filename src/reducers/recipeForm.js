export default function recipeForm(state = {ingredientIds: []}, action){
  switch (expression) {
    case 'RECIPE_FORM_ADD_INGREDIENT':
      let newIngredientIds = state.ingredientIds.concat(action.payload);
      return Object.assign({}, state, { ingredientIds: newIngredientIds})
    default:
      return state;
  }
}

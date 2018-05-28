import { SET_RECIPES, ADD_FAVORITE_RECIPE, REMOVE_FAVORITE_RECIPE } from '../actions';
const defaultState = {
    recipeList: [],
    favoriteRecipeList: []
};

function recipes(state = defaultState, action) {
    console.log(state.favoriteRecipeList);
    switch(action.type) {
        case SET_RECIPES:
            return {...state, recipeList: action.recipes};
        case ADD_FAVORITE_RECIPE:
            return {
                ...state,
                favoriteRecipeList: state.favoriteRecipeList.concat(action.recipe)
            }
           
        case REMOVE_FAVORITE_RECIPE:
            return {
                ...state,
                favoriteRecipeList: state.favoriteRecipeList.slice(r => r.title ===action.recipe.title)
            }
        default:
            return state;
    }
}

export default recipes;
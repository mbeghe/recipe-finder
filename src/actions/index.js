export const SET_RECIPES = "SET_RECIPES";
export const ADD_FAVORITE_RECIPE = "ADD_FAVORITE_RECIPE";
export const REMOVE_FAVORITE_RECIPE = "REMOVE_FAVORITE_RECIPE";

function setRecipes(recipes) {
    return{
        type: SET_RECIPES,
        recipes
    }
}

export function addFavoriteRecipe(recipe) {
    return {
        type: ADD_FAVORITE_RECIPE,
        recipe
    }
}

export function removeFavoriteRecipe(recipe) {
    return {
        type: REMOVE_FAVORITE_RECIPE,
        recipe
    }
}



export function getRecipes(ingredients, dish) {
    const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
		return dispatch => {
            //dispatch(setRecipesRequest());
            fetch(url, {
                method: 'GET'
            }).then(response => response.json())
              .then(json => {
                  dispatch(setRecipes(json.results));
                });
        }

}

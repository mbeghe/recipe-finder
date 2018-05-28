import recipes from './recipes_reducer';

import { reducer as form  } from 'redux-form';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    recipes,
    form
})

export default rootReducer;
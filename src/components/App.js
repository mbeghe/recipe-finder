import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from 'material-ui/Typography';
import SearchRecipes from './SearchRecipes';
import { getRecipes } from '../actions/index';
import RecipesList from './RecipesList';

class App extends Component {
    filterRecipes = values => {
        return this.props.dispatch(getRecipes(values.ingredients,values.dish));
    }
    render(){
        return(
            <div>
                <Typography variant="display1" align="center">
                    Recipe Filter
                </Typography>
                <SearchRecipes
                    onSubmit={this.filterRecipes}
                />
                <RecipesList/>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        recipes: state.recipes
    };
}

export default connect(mapStateToProps)(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';

import { Grid } from 'material-ui';


class RecipesList extends Component {
    render() {
        return(
            <div>
                <Grid container>
                    {
                        this.props.recipes.recipeList.map((recipe, ix) => {
                            return(
                                <Grid item xs={12} md={6} key={ix}>
                                    <RecipeItem
                                        
                                        recipe={recipe}
                                    />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(RecipesList)
import React, { Component } from 'react';
import {Card, CardContent, Typography, CardActions, Button, CardMedia } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import { connect } from 'react-redux';
import { addFavoriteRecipe, removeFavoriteRecipe } from '../actions';
import { compose } from 'redux';

const styles = {
    card: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '10px',
      padding: '5px'
    },
    content: {
        display: 'inline-block',
        textAlign: 'left',
        paddingRight: '10px',
        width: '400px'
    },
    img: {
        height: 0,
        paddingTop: '56.25%'
    }
  };
  
class RecipeItem extends Component {
    constructor() {
        super();
        this.state = {favorited: false}
    }
    handleFavoriteClick(recipe) {
        this.props.addFavoriteRecipe(recipe);
        this.setState({favorited: true});
    }
    handleUnfavoriteClick(recipe) {
        this.props.removeFavoriteRecipe(recipe);
        this.setState({favorited: false});
    }
    render() {
        
  const { classes } = this.props;
        return(
            <div>
                <Card className={classes.card}>
                    <CardMedia 
                    >
                    <img src={this.props.recipe.thumbnail} alt=""/>
                    </CardMedia>
                    <CardContent className={classes.content}>
                        <Typography gutterBottom variant="headline" component="h2">
                            {this.props.recipe.title}
                        </Typography>
                        <Typography component="p">
                            {this.props.recipe.ingredients}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button 
                            href={this.props.recipe.href}
                            size="small" 
                            color="secondary"
                            variant="raised">
                            Recipe
                        </Button>
                        {this.state.favorited?
                            <Favorite 
                                color="error" 
                                onClick={() => this.handleUnfavoriteClick(this.props.recipe)}
                            /> 
                            : 
                            <FavoriteBorder 
                                color="error"
                                onClick={() => this.handleFavoriteClick(this.props.recipe)}
                            />}
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default compose(
    connect(null, { addFavoriteRecipe, removeFavoriteRecipe}),
    withStyles(styles))(RecipeItem);
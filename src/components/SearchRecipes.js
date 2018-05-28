import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
 
class SearchRecipes extends Component {
    render() {
        const { handleSubmit, submitting } = this.props;

        return(
            <form onSubmit={handleSubmit} style={{alignItems: 'center' }}>
                <Grid container justify="center" spacing={16}>
                    <Grid item xs={12} md={2}>
                        <Field
                            component={TextField}
                            fullWidth
                            autoComplete="off"
                            name="ingredients"
                            margin="dense"                        
                            label="Ingredients"
                            type="text"
                        />
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Field
                            component={TextField}
                            fullWidth
                            autoComplete="off"
                            name="dish"
                            margin="dense"                        
                            label="Dish"
                            type="text"
                        />
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Button 
                            variant="raised"
                            type="submit"
                            disabled={submitting}
                            color="primary"
                        >
                            Filter
                        </Button>
                    </Grid>
                </Grid>
            </form>
        )
    }
}

export default reduxForm({
		form: 'recipesForm',
    })(SearchRecipes);
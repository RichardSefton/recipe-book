import { connect } from 'react-redux';

const Ingredients = ({ ingredients }) => {
    console.log(ingredients);
    return null;
}

export default connect(({ recipeSlice }) => ({
    ingredients: recipeSlice.recipe.ingredients,
}))(Ingredients);
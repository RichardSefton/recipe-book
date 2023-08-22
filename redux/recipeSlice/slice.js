import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { 
    recipesAdapter,
    loadRecipes, 
    createRecipe,
    setRecipeName as setRecipeNameAction,
    setRecipeDescription as setRecipeDescriptionAction
} from './actions';

//dab hand at react redux. But the old way with actions and reducers
//Never tried it with this toolkit before so should be fun. 
//Working off example here: https://github.com/hybridheroes/redux-toolkit-example/blob/master


const recipeSlice = createSlice({
    name: 'recipe',
    initialState: {
        recipe: {
            id: '',
            name: '',
            description: '',
            ingredients: [],
            steps: []
        },
        recipes: recipesAdapter.getInitialState({
            loading: false,
        })
    },
    reducers: {
        //reducers go here...
        setRecipeName: setRecipeNameAction,
        setRecipeDescription: setRecipeDescriptionAction,
    },
    extraReducers: (builder) => {
        builder.addCase(loadRecipes.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loadRecipes.fulfilled, (state, action) => {
            state.loading = false;
            recipesAdapter.setAll(state.recipes, action.payload);
        });
        builder.addCase(loadRecipes.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(createRecipe.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(createRecipe.fulfilled, (state, action) => {
            state.loading = false;
            recipesAdapter.addOne(state.recipes, action.payload);
        });
        builder.addCase(createRecipe.rejected, (state) => {
            state.loading = false;
        });
    }
});

export { createRecipe, loadRecipes };

export const { 
    setRecipeName, 
    setRecipeDescription
} = recipeSlice.actions;
export default recipeSlice.reducer;
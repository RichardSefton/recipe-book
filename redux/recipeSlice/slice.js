import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { 
    recipesAdapter,
    loadRecipes, 
    createRecipe,
    setRecipeName as setRecipeNameAction,
    setRecipeDescription as setRecipeDescriptionAction,
    addIngredient as addIngredientAction,
    toggleShowIngredients as toggleShowIngredientsAction,
    toggleShowSteps as toggleShowStepsAction,
    addStep as addStepAction,
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
        showIngredients: false,
        showSteps: false,
        recipes: recipesAdapter.getInitialState({
            loading: false,
        })
    },
    reducers: {
        //reducers go here...
        setRecipeName: setRecipeNameAction,
        setRecipeDescription: setRecipeDescriptionAction,
        addIngredient: addIngredientAction,
        addStep: addStepAction,
        toggleShowIngredients: toggleShowIngredientsAction,
        toggleShowSteps: toggleShowStepsAction,
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
            //recipe creation succeeded so we can navigate away. 
            //luckily, we have the navigation object in state. 
            const { appSlice: { navigation } } = state;
            navigation.navigate('RecipeList');
        });
        builder.addCase(createRecipe.rejected, (state) => {
            //we can handle error notifications here.
            state.loading = false;
        });
    }
});

export { createRecipe, loadRecipes };

export const { 
    setRecipeName, 
    setRecipeDescription,
    addIngredient,
    addStep,
    toggleShowIngredients,
    toggleShowSteps,
} = recipeSlice.actions;
export default recipeSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { 
    recipesAdapter,
    loadRecipes,
    loadRecipe, 
    createRecipe,
    setRecipeName as setRecipeNameAction,
    setRecipeDescription as setRecipeDescriptionAction,
    addIngredient as addIngredientAction,
    toggleShowIngredients as toggleShowIngredientsAction,
    toggleShowSteps as toggleShowStepsAction,
    addStep as addStepAction,
    clearIngredients as clearIngredientsAction,
    clearSteps as clearStepsAction,
    selectStepForEdit as selectStepForEditAction,
    cancelEditStep as cancelEditStepAction,
    saveEditStep as saveEditStepAction,
    deleteStep as deleteStepAction,
    selectIngredientForEdit as selectIngredientForEditAction,
    cancelEditIngredient as cancelEditIngredientAction,
    saveEditIngredient as saveEditIngredientAction,
    deleteIngredient as deleteIngredientAction,
    selectRecipe as selectRecipeAction,
    clearRecipe as clearRecipeAction,
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
            steps: [],
        },
        active: {
            recipe: {
                id: '',
                name: '',
                description: '',
                ingredients: [],
                steps: [],
            },
            step: {
                id: '',
                stepNo: '',
                step: '',
            },
            ingredient: {
                id: '',
                ingredient: '',
                quantity: '',
                unit: '',
            },
            editStep: false,
            editIngredient: false,
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
        clearIngredients: clearIngredientsAction,
        clearSteps: clearStepsAction,
        selectStepForEdit: selectStepForEditAction,
        cancelEditStep: cancelEditStepAction,
        saveEditStep: saveEditStepAction,
        deleteStep: deleteStepAction,
        selectIngredientForEdit: selectIngredientForEditAction,
        cancelEditIngredient: cancelEditIngredientAction,
        saveEditIngredient: saveEditIngredientAction,
        deleteIngredient: deleteIngredientAction,
        selectRecipe: selectRecipeAction,
        clearRecipe: clearRecipeAction,
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
        builder.addCase(createRecipe.rejected, (state, action) => {
            //we can handle error notifications here.
            console.error('create recipe rejected', action.error);
            state.loading = false;
        });
        builder.addCase(loadRecipe.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loadRecipe.fulfilled, (state, action) => {
            state.loading = false;
            state.recipe = action.payload;
        });
        builder.addCase(loadRecipe.rejected, (state, action) => {
            //we can handle error notifications here.
            console.error('load recipe rejected', action.error, action);
            state.loading = false;
        });
    }
});

export { createRecipe, loadRecipes, loadRecipe };

export const { 
    setRecipeName, 
    setRecipeDescription,
    addIngredient,
    addStep,
    toggleShowIngredients,
    toggleShowSteps,
    clearIngredients,
    clearSteps,
    selectStepForEdit,
    cancelEditStep,
    saveEditStep,
    deleteStep,
    selectIngredientForEdit,
    cancelEditIngredient,
    saveEditIngredient,
    deleteIngredient,
    selectRecipe,
    clearRecipe,
} = recipeSlice.actions;
export default recipeSlice.reducer;
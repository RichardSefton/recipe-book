import { createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { getRecipes, createRecipe as createRecipeRecord } from "../../datastore";
import uuid from "react-native-uuid";

export const recipesAdapter = createEntityAdapter({
    selectId: (recipe) => recipe.id,
    sortComparer: (a, b) => a.name.localeCompare(b.name)
});

export const setRecipeName = (state, action) => {
    state.recipe.name = action.payload;
};

export const setRecipeDescription = (state, action) => {
    state.recipe.description = action.payload;
};

export const addIngredient = (state, action) => {
    state.recipe.ingredients.push({ ...action.payload, id: uuid.v4() });
};

export const toggleShowIngredients = (state) => {
    state.showIngredients = !state.showIngredients;
};

export const toggleShowSteps = (state) => {
    state.showSteps = !state.showSteps;
};

export const loadRecipes = createAsyncThunk('recipe/loadRecipes', async (_, { getState }) => {
    const { appSlice: { database } } = getState();
    return await getRecipes(database);
});

export const createRecipe = createAsyncThunk('recipe/createRecipe', async (_, { getState }) => {
    const { appSlice: { database }, recipeSlice: { recipe }} = getState();
    try {
        const newRecipe = await createRecipeRecord(database, recipe);
        return newRecipe;
    } catch(error) {
        console.error(error);
    }
});
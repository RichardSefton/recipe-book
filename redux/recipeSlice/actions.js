import { createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { getRecipes, createRecipe as createRecipeRecord } from "../../datastore";

export const recipesAdapter = createEntityAdapter({
    selectId: (recipe) => recipe.id,
    sortComparer: (a, b) => a.name.localeCompare(b.name)
});

export const setRecipeName = (state, action) => {
    console.log(state, action);
    state.recipe.name = action.payload;
};

export const setRecipeDescription = (state, action) => {
    state.recipe.description = action.payload;
};

export const loadRecipes = createAsyncThunk('recipe/loadRecipes', async (_, { getState }) => {
    const { databaseSlice: { database } } = getState();
    return await getRecipes(database);
});

export const createRecipe = createAsyncThunk('recipe/createRecipe', async (_, { getState }) => {
    const { databaseSlice: { database }, recipeSlice: { recipe }} = getState();
    try {
        const newRecipe = await createRecipeRecord(database, recipe);
        return newRecipe;
    } catch(error) {
        console.log(error);
    }
});
import { createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { getRecipes, createRecipe as createRecipeRecord } from "../../datastore";
import uuid from "react-native-uuid";
import { validateNewRecipe } from "./validation";

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

export const addStep = (state, action) => {
    state.recipe.steps.push({ ...action.payload, id: uuid.v4() });
};

export const clearIngredients = (state, action) => {
    console.log(state, action)
    state.recipe.ingredients = [];
};

export const clearSteps = (state) => {
    state.recipe.steps = [];
};

export const toggleShowIngredients = (state) => {
    state.showIngredients = !state.showIngredients;
};

export const toggleShowSteps = (state) => {
    state.showSteps = !state.showSteps;
};

export const loadRecipes = createAsyncThunk('recipe/loadRecipes', async (_, { getState, rejectWithValue }) => {
    const { appSlice: { database } } = getState();
    try {
        return await getRecipes(database);
    } catch(error) {
        return rejectWithValue(error);
    }
});

export const createRecipe = createAsyncThunk('recipe/createRecipe', async (_, { getState, rejectWithValue, dispatch }) => {
    const { appSlice: { database }, recipeSlice: { recipe }} = getState();
    try {
        const { validated, message } = validateNewRecipe(recipe);
        if (!validated) return rejectWithValue(message); 
        const newRecipe = await createRecipeRecord(database, recipe);
        return newRecipe;
    } catch(error) {
        console.error('create recipe error', error);
        return rejectWithValue(error);
    }
});
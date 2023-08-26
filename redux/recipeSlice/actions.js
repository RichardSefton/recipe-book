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

export const selectStepForEdit = (state, action) => {
    state.active.step = action.payload;
    state.active.editStep = true;
};
export const cancelEditStep = (state) => {
    state.active.step = {
        id: '',
        stepNo: '',
        step: '',
    };
    state.active.editStep = false;
};
export const saveEditStep = (state, action) => {
    const index = state.recipe.steps.findIndex((s) => s.id === action.payload.id);
    if (index === -1) return;
    state.recipe.steps[index] = action.payload;
    state.active.step = {
        id: '',
        stepNo: '',
        step: '',
    };
    state.active.editStep = false;
};
export const deleteStep = (state, action) => {
    //its not enough to just remove the step from the recipe, we also need to update the stepNo's for each step after the deleted step
    state.recipe.steps = [...state.recipe.steps.filter(s => s.id !== action.payload.id)];
    const sortedSteps = state.recipe.steps.sort((a, b) => a.stepNo - b.stepNo);
    sortedSteps.forEach((s, i) => {
        s.stepNo = i + 1;
    });
    state.recipe.steps = sortedSteps;
}

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
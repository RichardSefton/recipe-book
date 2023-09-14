import { createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { 
    getRecipes, 
    getRecipe, 
    createRecipe as createRecipeRecord, 
    deleteRecipe as deleteRecipeRecord,  
    editRecipe as editRecipeRecord,
    insertRecipeImage as insertRecipeImageRecord,
    deleteRecipeImage as deleteRecipeImageRecord,
} from "../../datastore";
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

export const addRecipeImage = (state, action) => {
    state.recipe.images.push({ base64: action.payload, id: uuid.v4() });
};

export const removeRecipeImage = (state, action) => {
    state.recipe.images = [
        ...state.recipe.images.filter((img) => img.id !== action.payload.id),
    ];
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
    state.showSteps = false;
};

export const toggleShowSteps = (state) => {
    state.showSteps = !state.showSteps;
    state.showIngredients = false;
};

export const selectStepForEdit = (state, action) => {
    state.active.step = action.payload;
    state.active.editStep = true;
};
export const cancelEditStep = (state) => {
    state.active.step = {
        id: '',
        stepOrder: '',
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
        stepOrder: '',
        step: '',
    };
    state.active.editStep = false;
};
export const deleteStep = (state, action) => {
    //its not enough to just remove the step from the recipe, we also need to update the stepOrder's for each step after the deleted step
    state.recipe.steps = [...state.recipe.steps.filter(s => s.id !== action.payload.id)];
    const sortedSteps = state.recipe.steps.sort((a, b) => a.stepOrder - b.stepOrder);
    sortedSteps.forEach((s, i) => {
        s.stepOrder = i + 1;
    });
    state.recipe.steps = sortedSteps;
}

export const selectIngredientForEdit = (state, action) => {
    state.active.ingredient = action.payload;
    state.active.editIngredient = true;
};
export const cancelEditIngredient = (state) => {
    state.active.ingredient = {
        id: '',
        ingredient: '',
        quantity: '',
        unit: '',
    };
    state.active.editIngredient = false;
};
export const saveEditIngredient = (state, action) => {
    const index = state.recipe.ingredients.findIndex(
        (s) => s.id === action.payload.id
    );
    if (index === -1) return;
    state.recipe.ingredients[index] = action.payload;
    state.active.ingredient = {
        id: '',
        ingredient: '',
        quantity: '',
        unit: '',
    };
    state.active.editIngredient = false;
};
export const deleteIngredient = (state, action) => {
    state.recipe.ingredients = [
        ...state.recipe.ingredients.filter((s) => s.id !== action.payload.id),
    ];
};

export const selectRecipe = (state, action) => {
    state.recipe = {
        ...action.payload
    };
};

export const clearRecipe = (state) => {
    state.recipe = {
        id: '',
        name: '',
        description: '',
        ingredients: [],
        steps: [],
        images: [],
    };
};

export const loadRecipes = createAsyncThunk('recipe/loadRecipes', async (_, { getState, rejectWithValue }) => {
    const { appSlice: { database } } = getState();
    try {
        return await getRecipes(database);
    } catch(error) {
        return rejectWithValue(error);
    }
});

export const loadRecipe = createAsyncThunk("recipe/loadRecipe", async (id, { getState, rejectWithValue }) => {
        const {
            appSlice: { database },
        } = getState();
        try {
            return await getRecipe(database, id);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

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

export const editRecipe = createAsyncThunk('recipe/editRecipe', async (_, { getState, rejectWithValue, dispatch }) => {
    const { appSlice: { database }, recipeSlice: { recipe } } = getState();
    try {
        const { validated, message } = validateNewRecipe(recipe);
        if (!validated) return rejectWithValue(message);
        editRecipeRecord(database, recipe);
        return recipe;
    } catch(error) {
        console.error(error);
        return rejectWithValue(error)
    }

});

export const deleteRecipe = createAsyncThunk('recipe/deleteRecipe', async (recipeId, { getState, rejectWithValue, dispatch}) => {
    const { appSlice: { database } } = getState();
    try {
        await deleteRecipeRecord(database, recipeId);
        return recipeId;
    } catch(error) {
        console.error('delete recipe error', error);
        return rejectWithValue(error);
    }
});

export const insertRecipeImage = createAsyncThunk(
    "recipe/insertRecipeImage",
    async (image, { getState, rejectWithValue, dispatch }) => {
        const {
            appSlice: { database },
            recipeSlice: { recipe },
        } = getState();
        try {
            const newImage = { base64: image, id: uuid.v4() };
            await insertRecipeImageRecord(database, {recipeId: recipe.id, image: newImage});
            return newImage;
        } catch (error) {
            console.error(error);
            return rejectWithValue(error);
        }
    }
);

export const deleteRecipeImage = createAsyncThunk(
    "recipe/deleteRecipeImage",
    async (imageId, { getState, rejectWithValue, dispatch }) => {
        const {
            appSlice: { database },
        } = getState();
        try {
            await deleteRecipeImageRecord(database, { imageId });
            return imageId;
        } catch (error) {
            console.error(error);
            return rejectWithValue(error);
        }
    }
);
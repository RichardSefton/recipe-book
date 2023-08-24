//dab hand at react redux. But the old way with actions and reducers
//Never tried it with this toolkit before so should be fun.
//Working off example here: https://github.com/hybridheroes/redux-toolkit-example/blob/master
import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from './recipeSlice/slice';
import databaseReducer from './appSlice/slice';

export const store = configureStore({
    reducer: {
        recipeSlice: recipeReducer,
        appSlice: databaseReducer
    },
    //disable the serializable check as we want to store the database connection in state
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});
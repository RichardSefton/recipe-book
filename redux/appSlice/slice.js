import { createSlice } from "@reduxjs/toolkit";
import { 
    setDatabaseConnection as setDatabaseConnectionAction,
    setLoading as setLoadingAction,
    setProgress as setProgressAction,
    setNavigation as setNavigationAction,
} from "./actions";

const appSlice = createSlice({
    name: "recipe",
    initialState: {
        database: {},
        loading: true,
        progress: 0,
        navigation: {},
    },
    reducers: {
        setDatabaseConnection: setDatabaseConnectionAction,
        setLoading: setLoadingAction,
        setProgress: setProgressAction,
        setNavigation: setNavigationAction,
    },
});

export const { 
    setDatabaseConnection, 
    setLoading, 
    setProgress, 
    setNavigation 
} = appSlice.actions;

export default appSlice.reducer;

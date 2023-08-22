import { createSlice } from "@reduxjs/toolkit";
import { 
    setDatabaseConnection as setDatabaseConnectionAction,
    setLoading as setLoadingAction,
    setProgress as setProgressAction,
} from "./actions";

const databaseSlice = createSlice({
    name: "recipe",
    initialState: {
        database: {},
        loading: true,
        progress: 0,
    },
    reducers: {
        setDatabaseConnection: setDatabaseConnectionAction,
        setLoading: setLoadingAction,
        setProgress: setProgressAction,
    },
});

export const { setDatabaseConnection, setLoading, setProgress } = databaseSlice.actions;
export default databaseSlice.reducer;

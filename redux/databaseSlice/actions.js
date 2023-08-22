export const setDatabaseConnection = (state, action) => {
    state.database = action.payload;
}

export const setLoading = (state, action) => {
    state.loading = action.payload;
};

export const setProgress = (state, action) => {
    state.progress = action.payload;
};
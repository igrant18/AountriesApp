import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: { theme: 'LIGHT' },
    reducers: {
        toggleTheme(state, payload) {
            state.theme === 'LIGHT' ? state.theme = 'DARK' : state.theme = 'LIGHT';
        }
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
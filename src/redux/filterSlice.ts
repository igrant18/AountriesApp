import { createSlice } from "@reduxjs/toolkit";

const FilterSlice = createSlice({
    name: 'filter',
    initialState: { 
        searchValue: '',
        regionFilter: '' 
    },
    reducers: {
        changeSearchValue(state, action) {
            state.searchValue = action.payload.searchValue
        },
        changeRegionFilter(state, action) {
            state.regionFilter = action.payload.regionFilter
        }
    },
});

export const { changeSearchValue, changeRegionFilter } = FilterSlice.actions;

export default FilterSlice.reducer;
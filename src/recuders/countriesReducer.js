import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    countries: [],
    localCountries: [],
    error: null
}

// Create a slice of the state
const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        setCountries(state, action) {
            state.countries = action.payload;
        },
        setLocalCountries(state, action) {
            state.localCountries = action.payload;
        },
        setError(state, action) {
            state.countries = action.payload;
        }
    }
});

// Get all action identifiers, generated by React Toolkit
export const countriesActions = countriesSlice.actions;

export default countriesSlice;
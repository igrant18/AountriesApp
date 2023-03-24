import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Country, Name } from "../types/Countries";

const baseUrl = 'https://restcountries.com/v3.1/'

export const getAllCountriesAsync = createAsyncThunk<Array<Country>>(
    'countries/getAllCountries',
    async () => {
      const response = await fetch(`${baseUrl}all`);
      const value = await response.json();
      // The value we return becomes the `fulfilled` action payload
      return value;
    }
);

const countriesInitialState = {
    isPending: false,
    countries: [
    { 
      name: { 
        official : '', 
        common: '', 
        nativeName: { } 
      },
      tld: [''],
      currencies: { },
      capital: [''],
      region: '',
      subregion: '',
      languages: { },
      borders: [''],
      population: 0,
      flags: {
        png: '',
        svg: '',
        alt: '',
      },
      capitalInfo: {
        latlng: [0]
      }
    }],
    error: '',
    borderCountries: [
      { 
        name: { 
          official : '', 
          common: '', 
          nativeName: { } 
        },
        tld: [''],
        currencies: { },
        capital: [''],
        region: '',
        subregion: '',
        languages: { },
        borders: [''],
        population: 0,
        flags: {
          png: '',
          svg: '',
          alt: '',
        },
        capitalInfo: {
          latlng: [0]
        }
      }
    ]
}

const countriesSlice = createSlice({
    name: 'countries',
    initialState: countriesInitialState,
    reducers: { 
      setBorderCountries(state, action) {
        state.borderCountries = action.payload.borderCountries;
      }
    },
    extraReducers: (builder) => {
        builder
          .addCase(getAllCountriesAsync.pending, (state) => {
            state.isPending = true;
          })
          .addCase(getAllCountriesAsync.fulfilled, (state, action) => {
            state.isPending = false;
            state.countries = action.payload;
          })
          .addCase(getAllCountriesAsync.rejected, (state) => {
            state.isPending = false;
            state.error = 'An Error has Occured'
          });
    },
});

export const { setBorderCountries } = countriesSlice.actions;

export default countriesSlice.reducer;
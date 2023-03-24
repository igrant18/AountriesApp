import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createLogger } from 'redux-logger';
import countriesSlice from './countriesSlice';
import filterSlice from './filterSlice'
import themeSlice from './themeSlice';

const logger = createLogger();

export const store = configureStore({
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(logger),
  reducer: { 
    countriesRuducer: countriesSlice,
    themeReducer: themeSlice,
    filterReducer: filterSlice
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
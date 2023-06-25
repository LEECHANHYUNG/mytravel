import { configureStore } from '@reduxjs/toolkit';
import searchPlaceReducer from './searchPlaceSlice';

const store = configureStore({
  reducer: {
    searchPlace: searchPlaceReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import searchPlaceReducer from './searchPlaceSlice';
import tripListSlice from './tripListSlice';

const store = configureStore({
  reducer: {
    searchPlace: searchPlaceReducer,
    tripList: tripListSlice,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import searchPlaceReducer from './searchPlaceSlice';
import tripListSlice from './tripListSlice';
import addTravelListSlice from './addTravelListSlice';

const store = configureStore({
  reducer: {
    searchPlace: searchPlaceReducer,
    tripList: tripListSlice,
    addTravelList: addTravelListSlice,
  },
});

export default store;

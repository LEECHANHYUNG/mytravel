import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  allTrips: {},
};
export const tripListSlice = createSlice({
  name: 'tripList',
  initialState,
  reducers: {
    updateAllTripList(state) {},
  },
});
export const { updateAllTripList } = tripListSlice.actions;

export default tripListSlice.reducer;

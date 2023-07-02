import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allTrips: {},
};
export const tripListSlice = createSlice({
  name: 'tripList',
  initialState,
  reducers: {
    updateAllTripList(state, action) {
      state.allTrips = action.payload;
    },
  },
});
export const { updateAllTripList } = tripListSlice.actions;

export default tripListSlice.reducer;

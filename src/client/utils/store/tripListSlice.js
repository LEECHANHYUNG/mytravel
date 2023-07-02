import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  allTrips: {},
};
export const tripListSlice = createSlice({
  name: 'tripList',
  initialState,
  reducers: {
    updateAllTripList(state) {
      axios.get('/mytravel/allTrips.json').then((res) => {
        console.log(res.data);
      });
    },
  },
});
export const { updateAllTripList } = tripListSlice.actions;

export default tripListSlice.reducer;

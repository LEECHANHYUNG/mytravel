import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  place: null,
};

export const searchPlaceSlice = createSlice({
  name: 'searchPlace',
  initialState,
  reducers: {
    updateSearchPlaceInfo(state, action) {
      state.place = action.payload;
    },
  },
});
export const { updateSearchPlaceInfo } = searchPlaceSlice.actions;

export default searchPlaceSlice.reducer;

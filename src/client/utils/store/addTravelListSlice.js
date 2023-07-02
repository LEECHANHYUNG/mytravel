import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

export const addTravelListSlice = createSlice({
  name: 'addTravelList',
  initialState,
  reducers: {
    showAddNewTravelModal(state) {
      state.isOpen = true;
    },
    closeAddNewTravelModal(state) {
      state.isOpen = false;
    },
  },
});
export const { closeAddNewTravelModal, showAddNewTravelModal } =
  addTravelListSlice.actions;

export default addTravelListSlice.reducer;

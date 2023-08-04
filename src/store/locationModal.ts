import { createSlice } from "@reduxjs/toolkit";

const toggleLocationModal = createSlice({
  name: "locationModal",
  initialState: { toggle: false, edit: false, data: "" },
  reducers: {
    toggleModal: (prevState) => {
      return { ...prevState, edit: false, toggle: !prevState.toggle, data: "" };
    },
    editLocations: (prevState, action) => {
      if (action.payload) {
        return { toggle: true, edit: true, data: action.payload };
      }
      return { data: null, toggle: true, edit: true };
    },
  },
});
const locationModalReducer = toggleLocationModal.reducer;
export default locationModalReducer;
export const { toggleModal, editLocations } = toggleLocationModal.actions;

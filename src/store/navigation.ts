import { createSlice } from "@reduxjs/toolkit";

const navSelected = createSlice({
  name: "navigation",
  initialState: "",
  reducers: {
    setNavHome(prevState) {
      return (prevState = "Home");
    },
    setNavLocation(prevState) {
      return (prevState = "Location");
    },
    setNavUsers(prevState) {
      return (prevState = "Users");
    },
    setNavBooking(prevState) {
      return (prevState = "Booking");
    },
    setNavOffers(prevState) {
      return (prevState = "Offers");
    },
    setNavBookingAttempts(prevState) {
      return (prevState = "Booking Attempts");
    },
    setNavLoginAttempts(prevState) {
      return (prevState = "Login Attempts");
    },
  },
});
const navReducer = navSelected.reducer;
export default navReducer;
export const navigationActions = navSelected.actions;

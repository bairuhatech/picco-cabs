import { createSlice } from "@reduxjs/toolkit";

const navSelected = createSlice({
  name: "navigation",
  initialState: "",
  reducers: {
    setNavHome: (prevState) => {
      prevState = "Home";
    },
    setNavLocation: (prevState) => {
      return (prevState = "Location");
    },
    setNavUsers: (prevState) => {
      return (prevState = "Users");
    },
    setNavBooking: (prevState) => {
      return (prevState = "Booking");
    },
    setNavOffers: (prevState) => {
      return (prevState = "Offers");
    },
    setNavBookingAttempts: (prevState) => {
      return (prevState = "Booking Attempts");
    },
    setNavLoginAttempts: (prevState) => {
      return (prevState = "Login Attempts");
    },
    setNavDrivers: (prevState) => {
      return (prevState = "Driver");
    }
  },
});
export default navSelected.reducer;
export const {
  setNavLoginAttempts,
  setNavBookingAttempts,
  setNavOffers,
  setNavHome,
  setNavLocation,
  setNavUsers,
  setNavBooking,
  setNavDrivers
} = navSelected.actions;

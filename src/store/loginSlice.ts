import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
  name: "login",
  initialState: {
    user: { user_name: "", password: "" },
    auth: false,
    bookinguser: {},
  },
  reducers: {
    userLogin: (prevState, actions) => {
      prevState.user = actions.payload;
      prevState.auth = true;
    },
    userLogout: (prevState) => {
      prevState.user = { user_name: "", password: "" };
      prevState.auth = false;
    },
    bookingLogin: (prevState, actions) => {
      prevState.bookinguser = actions.payload;
      prevState.auth = true;
    },
  },
});

export const { userLogin, userLogout, bookingLogin } = LoginSlice.actions;
export default LoginSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { user: { user_name: "", password: "" }, auth: false },
  reducers: {
    userLogin(prevState,actions) {
      return { user: { ...actions.payload}, auth: true };
    },
    userLogout(prevState) {
      return { user: { user_name: "", password: "" }, auth: false };
    },
  },
});
const loginReducer=loginSlice.reducer;
export default loginReducer;
export const LoginActions=loginSlice.actions;

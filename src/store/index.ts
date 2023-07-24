
import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navigation";
import locationModalReducer from "./locationModal";
import loginReducer from "./loginSlice";


export const mainStore = configureStore({
  reducer: { navigation: navReducer,locationModal:locationModalReducer,login:loginReducer },
});


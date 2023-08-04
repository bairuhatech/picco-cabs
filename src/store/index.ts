// import { configureStore } from "@reduxjs/toolkit";
// import navReducer from "./navigation";
// import locationModalReducer from "./locationModal";
// import loginReducer from "./loginSlice";

// export const mainStore = configureStore({
//   reducer: { navigation: navReducer,locationModal:locationModalReducer,login:loginReducer },
// });
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import Slices from "./slices";
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["User"],
  // blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, Slices);

const middleWareConfigs = {
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
};

const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(middleWareConfigs),
  ],
});
const PersistedStore = persistStore(Store);
export { Store, PersistedStore };

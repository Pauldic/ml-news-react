import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { encryptTransform } from "redux-persist-transform-encrypt";
import rootReducers from "./rootReducer";
import authMiddleware from "./middleware/auth";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
  authMiddleware,
];

const persistConfig = {
  key: "app",
  storage,
  version: 1,
  whitelist: ["ui", "auth"],
  // transforms: [
  //   encryptTransform({
  //     secretKey: process.env.REACT_APP_PERSIST_SECRET,
  //     onError: function (error) {
  //       // Handle the error.
  //       console.log("persist encrypting error");
  //     },
  //   }),
  // ],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  serializableCheck: false,
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export default store;

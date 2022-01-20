import { combineReducers } from "@reduxjs/toolkit";
import uiReducer from "redux/uiSlice";
import authReducer from "redux/authSlice";
import userReducer from "redux/userSlice";
import newsReducer from "redux/newsSlice";

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  user: userReducer,
  news: newsReducer,
});

export default rootReducer;

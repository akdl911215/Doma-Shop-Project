import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import users from "webapp/user/reducer/user.reducer";

const rootReducer = combineReducers({ users });

export default configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), logger],
});

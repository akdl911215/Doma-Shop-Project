import { combineReducers } from "redux";
import UserReducer from "webapp/reducers/user.reducer";

const rootReducer = combineReducers({
  UserReducer,
});

export default rootReducer;

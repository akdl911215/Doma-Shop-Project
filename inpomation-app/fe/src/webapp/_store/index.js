import { combineReducers } from "redux";
import UserReducer from "webapp/reducers/user.reducer";
import YearMonthReducer from "webapp/reducers/sidoAndProvince.reduce";

const rootReducer = combineReducers({
  UserReducer,
  YearMonthReducer,
});

export default rootReducer;

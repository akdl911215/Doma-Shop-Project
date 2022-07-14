import { combineReducers } from "redux";
import UserReducer from "webapp/reducers/user.reducer";
import ImportAndExportReducer from "webapp/reducers/sidoAndProvince.reduce";

const rootReducer = combineReducers({
  UserReducer,
  ImportAndExportReducer,
});

export default rootReducer;

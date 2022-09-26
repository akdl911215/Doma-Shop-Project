import { combineReducers } from "redux";
import UserReducer from "webapp/reducers/user.reducer";
import ImportAndExportReducer from "webapp/reducers/sidoAndProvince.reduce";
import YoutubeReducer from "webapp/reducers/youtube.reducer";
import InvestingBoardReducer from "webapp/reducers/investingBoard.reducer";

const rootReducer = combineReducers({
  UserReducer,
  ImportAndExportReducer,
  YoutubeReducer,
  InvestingBoardReducer,
});

export default rootReducer;

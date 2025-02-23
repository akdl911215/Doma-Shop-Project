import { all, fork } from "redux-saga/effects";
import { UserPageListRequest } from "webapp/reducers/user.reducer";
import { YoutubePagenationRequest } from "webapp/reducers/youtube.reducer";
import { InvestingPageListRequest } from "webapp/reducers/investingBoard.reducer";

// 중단점이 있는 함수(제너레이터)
export default function* RootSaga() {
  yield all([
    fork(InvestingPageListRequest),
    fork(UserPageListRequest),
    fork(YoutubePagenationRequest),
  ]);
}

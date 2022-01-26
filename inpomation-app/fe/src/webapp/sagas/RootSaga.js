import { all, fork } from "redux-saga/effects";
import { UserPageListRequest } from "webapp/user/reducer/user.reducer";

// 중단점이 있는 함수(제너레이터)
export default function* RootSaga() {
  yield all([fork(UserPageListRequest)]);
}

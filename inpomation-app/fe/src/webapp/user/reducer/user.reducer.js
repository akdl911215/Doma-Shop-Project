import {
  createRequestActionTypes,
  Request,
} from "webapp/lib/CreateRequestSaga";
import { takeLatest } from "redux-saga/effects";
import { UserPagenationListDataAPI } from "webapp/lib/CallApi";

const [
  USERPAGENATTIONBUTTON_REQUEST,
  USERPAGENATTIONBUTTON_SUCCESS,
  USERPAGENATTIONBUTTON_FAILURE,
] = createRequestActionTypes("USERPAGENATIONBUTTON");

// 액션 생성 함수
export const UserCurrentPageLocation = (pageNumber) => {
  console.log("pageNumber : ", pageNumber);
  return {
    type: USERPAGENATTIONBUTTON_REQUEST,
    payload: pageNumber,
  };
};

// 사가 생성
const UserPageListSaga = Request(
  USERPAGENATTIONBUTTON_REQUEST,
  UserPagenationListDataAPI
);

// takeLatest(지속해서 감시)
export function* UserPageListRequest() {
  yield takeLatest(USERPAGENATTIONBUTTON_REQUEST, UserPageListSaga);
}

// 초기값 설정
export const initialState = {
  UserPageListInitialNumber: 1,
  UserPageListInitialNumberRequst: false,
  UserPageListInitialNumberError: null,
};

// 리듀서
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USERPAGENATTIONBUTTON_REQUEST:
      console.log("USERPAGENATTIONBUTTON_REQUEST : ", action);
      return {
        ...state,
        UserPageListInitialNumber: null,
        UserPageListInitialNumberRequst: false,
        UserPageListInitialNumberError: null,
      };

    case USERPAGENATTIONBUTTON_SUCCESS:
      console.log("USERPAGENATTIONBUTTON_SUCCESS : ", action);
      return {
        ...state,
        UserPageListInitialNumber: action,
        UserPageListInitialNumberRequst: true,
      };

    case USERPAGENATTIONBUTTON_FAILURE:
      return {
        ...state,
        UserPageListInitialNumberRequst: false,
        UserPageListInitialNumberError: action.error,
      };

    default:
      return state;
  }
};
export default reducer;

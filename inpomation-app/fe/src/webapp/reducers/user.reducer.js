import { createRequestActionTypes, Request } from "../lib/CreateRequestSaga";
import { takeLatest } from "redux-saga/effects";
import { UserPagenationListDataAPI } from "../api/userApi";

const [
  USERPAGENATTIONBUTTON_REQUEST,
  USERPAGENATTIONBUTTON_SUCCESS,
  USERPAGENATTIONBUTTON_FAILURE,
] = createRequestActionTypes("USERPAGENATIONBUTTON");

// 액션 생성 함수
export const UserCurrentPageLocation = (pageSate) => {
  return {
    type: USERPAGENATTIONBUTTON_REQUEST,
    payload: pageSate,
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
  UserPageListInitial: {
    pageResult: {},
  },
  UserPageListInitialRequst: false,
  UserPageListInitialError: null,
};

// 리듀서
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USERPAGENATTIONBUTTON_REQUEST:
      return {
        ...state,
        UserPageListInitial: {
          pageResult: action?.payload,
        },
        UserPageListInitialRequst: false,
        UserPageListInitialError: null,
      };

    case USERPAGENATTIONBUTTON_SUCCESS:
      return {
        ...state,
        UserPageListInitial: {
          pageResult: action?.payload,
        },
        UserPageListInitialRequst: true,
      };

    case USERPAGENATTIONBUTTON_FAILURE:
      return {
        ...state,
        UserPageListInitialRequst: false,
        UserPageListInitialError: action.error,
      };

    default:
      return state;
  }
};
export default reducer;

import {
  createRequestActionTypes,
  Request,
} from "webapp/lib/CreateRequestSaga";
import { takeLatest } from "redux-saga/effects";
import { UserPagenationListDataAPI } from "webapp/api/UserApi";

const [
  USERPAGENATTIONBUTTON_REQUEST,
  USERPAGENATTIONBUTTON_SUCCESS,
  USERPAGENATTIONBUTTON_FAILURE,
] = createRequestActionTypes("USERPAGENATIONBUTTON");

// 액션 생성 함수
export const UserCurrentPageLocation = (pageSate) => {
  console.log("pageSate : ", pageSate);
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
    pageResult: {
      dtoList: [],
      page: 1,
      pageList: [],
      start: 1,
      end: 1,
      prev: false,
      next: false,
    },
  },
  UserPageListInitialRequst: false,
  UserPageListInitialError: null,
};

// 리듀서
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USERPAGENATTIONBUTTON_REQUEST:
      console.log("USERPAGENATTIONBUTTON_REQUEST : ", action);
      return {
        ...state,
        UserPageListInitial: {
          pageResult: {
            dtoList: [],
            page: 1,
            pageList: [],
            start: 1,
            end: 1,
            prev: false,
            next: false,
          },
        },
        UserPageListInitialRequst: false,
        UserPageListInitialError: null,
      };

    case USERPAGENATTIONBUTTON_SUCCESS:
      console.log("USERPAGENATTIONBUTTON_SUCCESS : ", action);
      console.log("action?.payload?.page : ", action?.payload?.page);
      return {
        ...state,
        UserPageListInitial: {
          pageResult: {
            dtoList: action?.payload?.dtoList,
            page: action?.payload?.page,
            pageList: action?.payload?.pageList,
            start: action?.payload?.start,
            end: action?.payload?.end,
            prev: action?.payload?.prev,
            next: action?.payload?.next,
          },
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

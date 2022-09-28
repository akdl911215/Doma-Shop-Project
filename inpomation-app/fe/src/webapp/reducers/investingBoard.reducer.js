import { takeLatest } from "redux-saga/effects";
import { InvestingBoardPagenationListDataAPI } from "webapp/api/investingInfomationApi";

const {
  createRequestActionTypes,
  Request,
} = require("webapp/lib/CreateRequestSaga");

const [INVESTINGBOARD_REQUEST] = createRequestActionTypes("INVESTINGBOARD");
const [
  INVESTINGBOARDCURRENT_REQUEST,
  INVESTINGBOARDCURRENT_SUCCESS,
  INVESTINGBOARDCURRENT_FAILURE,
] = createRequestActionTypes("INVESTINGBOARDCURRENT");

// 액션 생성 함수
export const InvestingBoardId = (id) => {
  return {
    type: INVESTINGBOARD_REQUEST,
    payload: id,
  };
};

export const InvestingBoardCurrentPageLocation = (pageNum) => {
  return {
    type: INVESTINGBOARDCURRENT_REQUEST,
    payload: pageNum,
  };
};

// 사가 생성
const InvestingBoardPageListSaga = Request(
  INVESTINGBOARDCURRENT_REQUEST,
  InvestingBoardPagenationListDataAPI
);

// takeLatest
export function* InvestingPageListRequest() {
  yield takeLatest(INVESTINGBOARDCURRENT_REQUEST, InvestingBoardPageListSaga);
}

// 초기값
export const initialState = {
  InvestingPageListInitial: [],
  InvestingPageListInitialRequest: false,
  InvestingPageListInitialError: null,
  InvestingBoardIdInitial: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INVESTINGBOARD_REQUEST:
      return {
        ...state,
        InvestingBoardIdInitial: action?.payload,
        InvestingPageListInitialRequest: false,
        InvestingPageListInitialError: null,
      };
    case INVESTINGBOARDCURRENT_REQUEST:
      return {
        ...state,
        InvestingPageListInitial: action?.payload,
      };
    case INVESTINGBOARDCURRENT_SUCCESS:
      return {
        ...state,
        InvestingPageListInitialRequest: true,
      };
    case INVESTINGBOARDCURRENT_FAILURE:
      return {
        ...state,
        InvestingPageListInitialRequest: false,
        InvestingPageListInitialError: action?.error,
      };

    default:
      return state;
  }
};
export default reducer;

import {
  createRequestActionTypes,
  Request,
} from "webapp/lib/CreateRequestSaga";
import { CityAndProvinceAPI } from "webapp/api/publicDataApi";
import { takeLatest } from "redux-saga/effects";

const [YEARMONTHCHOICE_REQUEST] = createRequestActionTypes("YEARMONTHCHOICE");

export const CityAndProvineceYearMonthChoice = (sido) => {
  console.log("CityAndProvineceYearMonthChoice sido : ", sido);
  return {
    type: YEARMONTHCHOICE_REQUEST,
    payload: sido,
  };
};

export const initialState = {
  YearMonthCoiceInital: { sidocode: "11" },
  YearMonthCoiceInitalRequset: false,
  YearMonthCoiceInitalError: null,
};

const reducer = (state = initialState, action) => {
  console.log("reducer action.type : ", action.type);
  switch (action.type) {
    case YEARMONTHCHOICE_REQUEST:
      console.log("YEARMONTHCHOICE_REQUEST : ", action);
      return {
        ...state,
        YearMonthCoiceInital: { sidocode: action?.payload },
      };

    default:
      return state;
  }
};

export default reducer;

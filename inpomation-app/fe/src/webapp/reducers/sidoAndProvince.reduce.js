import { createRequestActionTypes } from "webapp/lib/CreateRequestSaga";

const [SIDOCODECHOICE_REQUEST] = createRequestActionTypes("SIDOCODECHOICE");
const [YEARMONTHCHOICE_REQUEST] = createRequestActionTypes("YEARMONTHCHOICE");

export const CityAndProvineceSidoCodeChoice = (sido) => {
  return {
    type: SIDOCODECHOICE_REQUEST,
    payload: sido,
  };
};

export const CityAndProvineceYearMonthChoice = (yearMonth) => {
  console.log("CityAndProvineceYearMonthChoice YearMonth : ", yearMonth);
  return {
    type: YEARMONTHCHOICE_REQUEST,
    payload: yearMonth,
  };
};

export const initialState = {
  SidoCodeCoiceInital: { sidocode: "11" },
  SidoCodeCoiceInitalRequset: false,
  SidoCodeCoiceInitalError: null,
  YearMonthCoiceInital: { year: "2000", month: "01" },
  YearMonthCoiceInitalRequset: false,
  YearMonthCoiceInitalError: null,
};

const reducer = (state = initialState, action) => {
  console.log("reducer action.type : ", action.type);
  switch (action.type) {
    case SIDOCODECHOICE_REQUEST:
      console.log("SIDOCODECHOICE_REQUEST : ", action);
      return {
        ...state,
        SidoCodeCoiceInital: { sidocode: action?.payload },
      };
    case YEARMONTHCHOICE_REQUEST:
      console.log("YEARMONTHCHOICE_REQUEST : ", action);
      return {
        ...state,
        YearMonthCoiceInital: {
          year: action?.payload?.year,
          month: action?.payload?.month,
        },
      };

    default:
      return state;
  }
};

export default reducer;

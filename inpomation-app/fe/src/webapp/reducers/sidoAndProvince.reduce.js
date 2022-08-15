import { createRequestActionTypes } from "webapp/lib/CreateRequestSaga";

const [SIDOCODECHOICE_REQUEST] = createRequestActionTypes("SIDOCODECHOICE");
const [YEARMONTHCHOICE_REQUEST] = createRequestActionTypes("YEARMONTHCHOICE");
const [ITEMCHOICE_REQUEST] = createRequestActionTypes("ITEMCHOICE");
const [IMPORTEXPORT_REQUEST] = createRequestActionTypes("IMPORTEXPORT");

export const CityAndProvineceSidoCodeChoice = (sido) => {
  return {
    type: SIDOCODECHOICE_REQUEST,
    payload: sido,
  };
};

export const CityAndProvineceYearMonthChoice = (yearMonth) => {
  return {
    type: YEARMONTHCHOICE_REQUEST,
    payload: yearMonth,
  };
};

export const CityAndProvineceITtemCodeChoice = (item) => {
  return {
    type: ITEMCHOICE_REQUEST,
    payload: item,
  };
};

export const CityAndProvineceImportExportCodeChoice = (ImportExport) => {
  return {
    type: IMPORTEXPORT_REQUEST,
    payload: ImportExport,
  };
};

export const initialState = {
  SidoCodeCoiceInital: { sidocode: "11" },
  SidoCodeCoiceInitalRequset: false,
  SidoCodeCoiceInitalError: null,
  YearMonthCoiceInital: { year: "2000", month: "01" },
  YearMonthCoiceInitalRequset: false,
  YearMonthCoiceInitalError: null,
  ItemCoiceInital: { item: "" },
  ItemCoiceInitalRequset: false,
  ItemCoiceInitalError: null,
  ImportExportChoiceInital: { importExport: "" },
  ImportExportInitalRequset: false,
  ImportExportInitalError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIDOCODECHOICE_REQUEST:
      return {
        ...state,
        SidoCodeCoiceInital: { sidocode: action?.payload },
      };
    case YEARMONTHCHOICE_REQUEST:
      return {
        ...state,
        YearMonthCoiceInital: {
          year: action?.payload?.year,
          month: action?.payload?.month,
        },
      };
    case ITEMCHOICE_REQUEST:
      return {
        ...state,
        ItemCoiceInital: {
          item: action?.payload,
        },
      };
    case IMPORTEXPORT_REQUEST:
      return {
        ...state,
        ImportExportChoiceInital: {
          importExport: action?.payload,
        },
      };

    default:
      return state;
  }
};

export default reducer;

import { call, delay, put } from "redux-saga/effects";

export const createRequestActionTypes = (type) => {
  const REQUEST = `${type}_REQUEST`;
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return [REQUEST, SUCCESS, FAILURE];
};

export function Request(type, request) {
  const SUCCESS = type.replace(/REQUEST/g, "SUCCESS");
  const FAILURE = type.replace(/REQUEST/g, "FAILURE");

  return function* (action) {
    try {
      console.log("이거 실행되어야함(통신)");
      const response = yield call(request, action.payload); // api 호출
      console.log("response", response);
      console.log("api 호출 성공 : ", type, action);

      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      const errorData = e.response.data;
      console.error("error data : ", errorData);

      yield put({
        type: FAILURE,
        payload: errorData,
        error: true,
      });
    }
  };
}

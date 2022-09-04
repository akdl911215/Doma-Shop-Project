import {
  createRequestActionTypes,
  Request,
} from "webapp/lib/CreateRequestSaga";
import { takeLatest } from "redux-saga/effects";
import {
  YoutubeSearchListDataAPI,
  YoutubeListDataAPI,
} from "webapp/api/youubeApi";

const [YOUTUBESEARCHLIST_REQUEST] =
  createRequestActionTypes("YOUTUBESEARCHLIST");

export const YoutubeSearchList = (list) => {
  return {
    type: YOUTUBESEARCHLIST_REQUEST,
    payload: list,
  };
};

export const initialState = {
  YoutubeSearchListInitial: [],
  YoutubeSearchListInitialRequest: false,
  YoutubeSearchListInitialError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case YOUTUBESEARCHLIST_REQUEST:
      return {
        ...state,
        YoutubeSearchListInitial: action?.payload,
      };

    default:
      return state;
  }
};

export default reducer;

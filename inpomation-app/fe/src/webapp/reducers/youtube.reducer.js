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
const [YOUTUBEBOARD_REQUEST] = createRequestActionTypes("YOUTUBEBOARD");

export const YoutubeSearchList = (list) => {
  return {
    type: YOUTUBESEARCHLIST_REQUEST,
    payload: list,
  };
};

export const YoutubeBoard = (board) => {
  return {
    type: YOUTUBEBOARD_REQUEST,
    payload: board,
  };
};

export const initialState = {
  YoutubeSearchListInitial: [],
  YoutubeSearchListInitialRequest: false,
  YoutubeSearchListInitialError: null,
  YoutubeBoardInitial: {},
  YoutubeBoardInitialRequest: false,
  YoutubeBoardInitialError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case YOUTUBESEARCHLIST_REQUEST:
      return {
        ...state,
        YoutubeSearchListInitial: action?.payload,
      };

    case YOUTUBEBOARD_REQUEST:
      return {
        ...state,
        YoutubeBoardInitial: action?.payload,
      };

    default:
      return state;
  }
};

export default reducer;

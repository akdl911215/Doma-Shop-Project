import {
  createRequestActionTypes,
  Request,
} from "webapp/lib/CreateRequestSaga";
import { takeLatest } from "redux-saga/effects";
import {
  YoutubeSearchListDataAPI,
  YoutubeListDataAPI,
} from "webapp/api/youubeApi";

const [
  YOUTUBESEARCHLIST_REQUEST,
  YOUTUBESEARCHLIST_SUCCESS,
  YOUTUBESEARCHLIST_FAILRUE,
] = createRequestActionTypes("YOUTUBESEARCHLIST");

export const YoutubeSearchList = (list) => {
  return {
    type: YOUTUBESEARCHLIST_REQUEST,
    payload: list,
  };
};

const YoutubeSearchListSaga = Request(
  YOUTUBESEARCHLIST_REQUEST,
  YoutubeSearchListDataAPI
);

export function* YoutubeSearchListRequest() {
  yield takeLatest(YOUTUBESEARCHLIST_REQUEST, YoutubeSearchListSaga);
}

export const initialState = {};

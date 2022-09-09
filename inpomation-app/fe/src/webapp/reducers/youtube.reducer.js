import { takeLatest } from "redux-saga/effects";
import { YoutubePagenationListDataAPI } from "webapp/api/youtubeApi";
import {
  createRequestActionTypes,
  Request,
} from "webapp/lib/CreateRequestSaga";

const [YOUTUBESEARCHLIST_REQUEST] =
  createRequestActionTypes("YOUTUBESEARCHLIST");
// const [YOUTUBEBOARD_REQUEST] = createRequestActionTypes("YOUTUBEBOARD");
const [YOUTUBEADMINSEARCHBAR_REQUEST] = createRequestActionTypes(
  "YOUTUBEADMINSEARCHBAR"
);
const [
  YOUTUBEPAGENATIONLIST_REQUEST,
  YOUTUBEPAGENATIONLIST_SUCCESS,
  YOUTUBEPAGENATIONLIST_FAILURE,
] = createRequestActionTypes("YOUTUBEPAGENATIONLIST");

export const YoutubeCurrentPageLocation = (pageState) => {
  return {
    type: YOUTUBEPAGENATIONLIST_REQUEST,
    payload: pageState,
  };
};

export const YoutubeAdminSearchBar = (search) => {
  return {
    type: YOUTUBEADMINSEARCHBAR_REQUEST,
    payload: search,
  };
};

export const YoutubeSearchList = (list) => {
  return {
    type: YOUTUBESEARCHLIST_REQUEST,
    payload: list,
  };
};

// export const YoutubeBoard = (board) => {
//   return {
//     type: YOUTUBEBOARD_REQUEST,
//     payload: board,
//   };
// };

const YoutubePagenationSaga = Request(
  YOUTUBEPAGENATIONLIST_REQUEST,
  YoutubePagenationListDataAPI
);

export function* YoutubePagenationRequest() {
  yield takeLatest(YOUTUBEPAGENATIONLIST_REQUEST, YoutubePagenationSaga);
}

export const initialState = {
  YoutubeSearchListInitial: [],
  YoutubeSearchListInitialRequest: false,
  YoutubeSearchListInitialError: null,
  // YoutubeBoardInitial: {},
  // YoutubeBoardInitialRequest: false,
  // YoutubeBoardInitialError: null,
  YoutubeAdminSearchBarInitial: [],
  YoutubeAdminSearchBarInitialRequest: false,
  YoutubeAdminSearchBarInitialError: null,
  YoutubePagenationListInitial: {},
  YoutubePagenationListInitialReqeust: false,
  YoutubePagenationListInitialError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case YOUTUBEPAGENATIONLIST_REQUEST: {
      return {
        ...state,
        YoutubePagenationListInitial: {},
        YoutubePagenationListInitialReqeust: false,
        YoutubePagenationListInitialError: null,
      };
    }
    case YOUTUBEPAGENATIONLIST_SUCCESS: {
      return {
        ...state,
        YoutubePagenationListInitial: action?.payload,
        YoutubePagenationListInitialReqeust: true,
      };
    }
    case YOUTUBEPAGENATIONLIST_FAILURE: {
      return {
        ...state,
        YoutubePagenationListInitialReqeust: false,
        YoutubePagenationListInitialError: action.error,
      };
    }

    case YOUTUBESEARCHLIST_REQUEST:
      return {
        ...state,
        YoutubeSearchListInitial: action?.payload,
      };

    case YOUTUBEADMINSEARCHBAR_REQUEST:
      return {
        ...state,
        YoutubeAdminSearchBarInitial: action?.payload,
      };

    // case YOUTUBEBOARD_REQUEST:
    //   return {
    //     ...state,
    //     YoutubeBoardInitial: action?.payload,
    //   };

    default:
      return state;
  }
};

export default reducer;

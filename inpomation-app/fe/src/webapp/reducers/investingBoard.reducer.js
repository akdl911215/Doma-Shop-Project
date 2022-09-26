const { createRequestActionTypes } = require("webapp/lib/CreateRequestSaga");

const [INVESTINGBOARD_REQUEST] = createRequestActionTypes("INVESTINGBOARD");

export const InvestingBoardId = (id) => {
  return {
    type: INVESTINGBOARD_REQUEST,
    payload: id,
  };
};

export const initialState = {
  InvestingBoardIdInitial: 0,
  InvestingBoardIdInitialRequest: 0,
  InvestingBoardIdInitialError: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INVESTINGBOARD_REQUEST:
      return {
        ...state,
        InvestingBoardIdInitial: action?.payload,
      };

    default:
      return state;
  }
};
export default reducer;

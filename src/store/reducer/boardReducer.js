import {
  // ADD_BOARDNAME_SUCCESS,
  ADD_BOARDNAME_FAIL,
  REQUEST_ADD_BOARDNAME,
} from "../actions/boardActions";

export function boardReducer(
  state = {
    isFetching: false,
    name: undefined,
    id: undefined,
  },
  action
) {
  switch (action.type) {
    // addBoard
    case REQUEST_ADD_BOARDNAME:
      return {
        ...state,
        isFetching: true,
      };

    case ADD_BOARDNAME_FAIL:
      return {
        ...state,

        isFetching: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

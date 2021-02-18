import {
  GET_BOARDLISTS_FAIL,
  GET_BOARDLISTS_SUCCESS,
  REQUEST_GET_BOARDLISTS,
} from "../actions/getBoardListsAction";
import { ADD_BOARDNAME_SUCCESS } from "../actions/boardActions";
export function getBoardListReducer(
  state = {
    items: [],
    isFetching: false,
  },
  action
) {
  switch (action.type) {
    case REQUEST_GET_BOARDLISTS:
      return {
        ...state,
        isFetching: true,
      };

    case GET_BOARDLISTS_SUCCESS:
      return {
        ...state,
        items: action.payload.boardLists,
        isFetching: false,
      };
    case GET_BOARDLISTS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
    case ADD_BOARDNAME_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload],
        isFetching: false,
      };
    default:
      return state;
  }
}

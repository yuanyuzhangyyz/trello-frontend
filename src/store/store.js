import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
const loggerMiddleware = createLogger();
import {
  GET_BOARDLISTS_FAIL,
  GET_BOARDLISTS_SUCCESS,
  REQUEST_GET_BOARDLISTS,
} from "./actions/getBoardListsAction";

import {
  REQUEST_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  CLEAR_LOGIN_ERROR,
} from "./actions/loginActions";

import {
  CLEAR_REGISTER_ERROR,
  REQUEST_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "./actions/signupActions";

import {
  ADD_BOARDNAME_SUCCESS,
  ADD_BOARDNAME_FAIL,
  REQUEST_ADD_BOARDNAME,
} from "./actions/boardActions";

const initstate = {
  entities: {
    user: {
      isFetching: false,
      userName: undefined,
    },
    register: {
      isFetching: false,
      userName: undefined,
    },
    boards: {
      isFetching: false,
      name: undefined,
      id: undefined,
    },
    boardLists: { items: [], isFetching: false },
  },
};

function trelloReducer(state = initstate, action) {
  switch (action.type) {
    // Login
    case CLEAR_REGISTER_ERROR:
      return {
        ...state,
        entities: {
          ...state.entities,
          register: {
            err: undefined,
          },
        },
      };
    case REQUEST_REGISTER:
      return {
        ...state,
        entities: {
          ...state.entities,
          register: {
            ...state.entities.register,
            isFetching: true,
          },
        },
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        entities: {
          ...state.entities,
          register: {
            isFetching: false,
            userName: action.payload.username,
          },
        },
      };
    case USER_REGISTER_FAIL:
      return {
        ...state,
        entities: {
          ...state.entities,
          register: {
            isFetching: false,
            error: action.payload.error,
          },
        },
      };

    // Sigin up
    case REQUEST_LOGIN:
      return {
        ...state,
        entities: {
          ...state.entities,
          user: {
            ...state.entities.user,
            isFetching: true,
          },
        },
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        entities: {
          ...state.entities,
          user: {
            isFetching: false,
            userName: action.payload.username,
          },
        },
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        entities: {
          ...state.entities,
          user: {
            isFetching: false,
            error: action.payload.error,
          },
        },
      };

    case CLEAR_LOGIN_ERROR:
      return {
        ...state,
        entities: {
          ...state.entities,
          user: {
            err: undefined,
          },
        },
      };

    // addBoard
    case REQUEST_ADD_BOARDNAME:
      return {
        ...state,
        entities: {
          ...state.entities,
          boards: {
            ...state.entities.boards,
            isFetching: true,
          },
        },
      };

    case ADD_BOARDNAME_SUCCESS:
      return {
        ...state,
        entities: {
          ...state.entities,
          boardLists: {
            items: [...state.entities.boardLists.items, action.payload],
            isFetching: false,
          },
        },
      };
    case ADD_BOARDNAME_FAIL:
      return {
        ...state,
        entities: {
          ...state.entities,
          boards: {
            isFetching: false,
            error: action.payload.error,
          },
        },
      };
    // getBoardLists

    case REQUEST_GET_BOARDLISTS:
      return {
        ...state,
        entities: {
          ...state.entities,
          boardLists: {
            ...state.entities.boardLists,
            isFetching: true,
          },
        },
      };

    case GET_BOARDLISTS_SUCCESS:
      console.log(action.payload, "action.payload");
      return {
        ...state,
        entities: {
          ...state.entities,
          boardLists: { items: action.payload.boardLists, isFetching: false },
        },
      };
    case GET_BOARDLISTS_FAIL:
      return {
        ...state,
        entities: {
          ...state.entities,
          boardLists: [
            {
              isFetching: false,
              error: action.payload.error,
            },
          ],
        },
      };
    default:
      return state;
  }
}

export default createStore(
  trelloReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

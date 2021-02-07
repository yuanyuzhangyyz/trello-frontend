import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
const loggerMiddleware = createLogger();

import {
  REQUEST_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  CLEAR_ERROR,
} from "./actions";
const initstate = {
  entities: {
    user: {
      isFetching: false,
      userName: undefined,
    },
  },
};

function trelloReducer(state = initstate, action) {
  switch (action.type) {
    case CLEAR_ERROR:
      return {
        ...state,
        entities: {
          user: {
            err: undefined,
          },
        },
      };
    case REQUEST_LOGIN:
      return {
        ...state,
        entities: {
          user: {
            isFetching: true,
          },
        },
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        entities: {
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
          user: {
            isFetching: false,
            error: action.payload.error,
          },
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

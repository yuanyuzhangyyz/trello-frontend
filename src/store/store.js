import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
const loggerMiddleware = createLogger();

import {
  REQUEST_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  CLEAR_LOGIN_ERROR,
  CLEAR_REGISTER_ERROR,
  REQUEST_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "./actions";
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
  },
};

function trelloReducer(state = initstate, action) {
  switch (action.type) {
    case CLEAR_LOGIN_ERROR:
      return {
        ...state,
        entities: {
          user: {
            err: undefined,
          },
        },
      };
    case CLEAR_REGISTER_ERROR:
      return {
        ...state,
        entities: {
          register: {
            err: undefined,
          },
        },
      };
    case REQUEST_REGISTER:
      return {
        ...state,
        entities: {
          register: {
            isFetching: true,
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

    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        entities: {
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
          register: {
            isFetching: false,
            error: action.payload.error,
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

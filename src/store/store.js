import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
const loggerMiddleware = createLogger();

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
          ...state.entities.register,
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

    default:
      return state;
  }
}

export default createStore(
  trelloReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

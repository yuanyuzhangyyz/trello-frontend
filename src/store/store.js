import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { trelloReducer } from "./reducer/index";
const loggerMiddleware = createLogger();

export default createStore(
  trelloReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

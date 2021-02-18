import { combineReducers } from "redux";

import { boardReducer } from "./boardReducer";
import { loginReducer } from "./loginReducer";
import { signupReducer } from "./signupReducer";
import { getBoardListReducer } from "./getBoardListReducer";

export const trelloReducer = combineReducers({
  register: signupReducer,
  user: loginReducer,
  boards: boardReducer,
  boardLists: getBoardListReducer,
});

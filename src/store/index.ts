import { combineReducers } from "redux";
import markdown from "./MarkDown";

const rootReducer = combineReducers({
  markdown,
});

export type rootState = ReturnType<typeof rootReducer>;

export default rootReducer;

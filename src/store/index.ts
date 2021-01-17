import { applyMiddleware, combineReducers, compose, createStore, Middleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import markdown from "./MarkDown";
import write from "./Write";
import writeProject from "./WriteProject";

const REDUX_CLEAR = "REDUX_CLEAR" as const;
export const reduxClear = () => ({
  type: REDUX_CLEAR,
});

const appReducer = combineReducers({
  markdown,
  write,
  writeProject,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "REDUX_CLEAR") {
    state = undefined;
  }
  return appReducer(state, action);
};

const store = () => {
  const middlewares: Middleware[] = [];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const config = createStore(rootReducer, enhancer);
  return config;
};

export type rootState = ReturnType<typeof rootReducer>;

export default store;

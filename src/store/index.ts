import { applyMiddleware, combineReducers, compose, createStore, Middleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import markdown from "./MarkDown";

const rootReducer = combineReducers({
  markdown,
});

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

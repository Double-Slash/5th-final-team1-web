import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore, Middleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import StyleReset from "@utils/styles/reset";
import RootReducer from "./store";
import Router from "./Router";

const store = () => {
  const middlewares: Middleware[] = [];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const config = createStore(RootReducer, enhancer);
  return config;
};

const App = () => {
  return (
    <>
      <StyleReset />
      <Provider store={store()}>
        <Router />
      </Provider>
    </>
  );
};

export default App;

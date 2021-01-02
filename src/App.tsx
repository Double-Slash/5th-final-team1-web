import React from "react";
import { Provider } from "react-redux";
import StyleReset from "@utils/styles/reset";
import store from "./store";
import Router from "./Router";

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

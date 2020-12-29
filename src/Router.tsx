import React from "react";
import loadable from "@loadable/component";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "@common/Organisms/Header";

// page components
const Write = loadable(() => import("@pages/Write"));

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/write" component={Write} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;

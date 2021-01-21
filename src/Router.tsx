import React from "react";
import loadable from "@loadable/component";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "@common/Organisms/Header";

// page components
const Callback = loadable(() => import("@pages/Callback"));
const Home = loadable(() => import("@pages/Home"));
const Questions = loadable(() => import("@pages/Questions"));
const Post = loadable(() => import("@pages/Post"));
const Project = loadable(() => import("@pages/Project"));
const Projects = loadable(() => import("@pages/Projects"));
const Write = loadable(() => import("@pages/Write"));
const WriteProject = loadable(() => import("@pages/WriteProject"));

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/qna" component={Questions} exact />
          <Route path="/post/:id" component={Post} exact />
          <Route path="/project/:id" component={Project} exact />
          <Route path="/project" component={Projects} exact />
          <Route path="/write" component={Write} exact />
          <Route path="/write/project" component={WriteProject} exact />
          <Route path="/callback" component={Callback} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;

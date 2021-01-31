import React from "react";
import loadable from "@loadable/component";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "@common/Organisms/Header";

// page components
const Callback = loadable(() => import("@pages/Callback"));
const Home = loadable(() => import("@pages/Home"));
const Questions = loadable(() => import("@pages/Questions"));
const Question = loadable(() => import("@pages/Question"));
const Project = loadable(() => import("@pages/Project"));
const Projects = loadable(() => import("@pages/Projects"));
const Search = loadable(() => import("@pages/Search"));
const User = loadable(() => import("@pages/User"));
const WriteQuestion = loadable(() => import("@store/WriteQuestion"));
const WriteProject = loadable(() => import("@store/WriteProject"));

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/qna" component={Questions} exact />
          <Route path="/qna/:id" component={Question} exact />
          <Route path="/project" component={Projects} exact />
          <Route path="/project/:id" component={Project} exact />
          <Route path="/search" component={Search} exact />
          <Route path="/me" component={User} exact />
          <Route path="/write/question" component={WriteQuestion} exact />
          <Route path="/write/project" component={WriteProject} exact />
          <Route path="/callback" component={Callback} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;

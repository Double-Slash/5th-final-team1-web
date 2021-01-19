import React from "react";
import PageHeader from "@components/Projects/PageHeader";
import TotalProjectsContainer from "@components/Projects/TotalProjectsContainer";
import * as S from "./style";

const Projects = () => {
  return (
    <>
      <PageHeader />
      <S.Layout>
        <TotalProjectsContainer />
      </S.Layout>
    </>
  );
};

export default Projects;

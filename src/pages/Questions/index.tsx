import React from "react";
import PageHeader from "@components/Questions/PageHeader";
import TotalQuestions from "@components/Questions/TotalQuestions";
import * as S from "./style";

const Question = () => {
  return (
    <>
      <PageHeader />
      <S.Layout>
        <TotalQuestions />
      </S.Layout>
    </>
  );
};

export default Question;

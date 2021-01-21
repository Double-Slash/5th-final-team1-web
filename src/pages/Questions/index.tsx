import React from "react";
import PageHeader from "@components/Questions/PageHeader";
import TotalQuestionsContainer from "@components/Questions/TotalQuestionsContainer";
import * as S from "./style";

const Question = () => {
  return (
    <>
      <PageHeader />
      <S.Layout>
        <TotalQuestionsContainer />
      </S.Layout>
    </>
  );
};

export default Question;

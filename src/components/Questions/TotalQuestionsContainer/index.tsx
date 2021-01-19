import React, { useLayoutEffect, useRef, useState } from "react";
import TotalQuestionList from "@components/Questions/TotalQuestionList";
import useInfiniteScroll from "@hooks/useInfiniteScroll";
import { getQuestions } from "@apis/question";
import { IQuestionListItem, IQuestionList } from "@typings/db";
import * as S from "./style";

const TotalQuestionsContainer = () => {
  const loadingRef = useRef<HTMLDivElement>(null);
  const [questionData, setQuestionData] = useState<IQuestionListItem[][] | undefined>(undefined);
  const [data] = useInfiniteScroll<IQuestionList>({ api: getQuestions, listName: "questions", loadingRef });

  useLayoutEffect(() => {
    if (!data) return;
    setQuestionData((prev) => {
      if (!prev) {
        return [[...data.questions]];
      }
      return [...prev, [...data.questions]];
    });
  }, [data]);

  return (
    <>
      <S.Layout>
        <h1 className="title">전체</h1>
        <article>
          {questionData?.map((listData) => (
            <TotalQuestionList key={Math.random() * 10} listData={listData} />
          ))}
        </article>
        <div ref={loadingRef} />
      </S.Layout>
    </>
  );
};

export default TotalQuestionsContainer;

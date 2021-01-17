/* eslint-disable consistent-return */
import React, { useEffect, useRef, useState } from "react";
import QuestionCard from "@common/Molecules/PostCard/QuestionCard";
import useInfiniteScroll from "@hooks/useInfiniteScroll";
import { getQuestions } from "@apis/question";
import { IQuestionListItem, IQuestionList } from "@typings/db";
import * as S from "./style";

const TotalQuestions = () => {
  const [questionData, setQuestionData] = useState<IQuestionListItem[] | undefined>(undefined);
  const loadingRef = useRef<HTMLDivElement>(null);
  const [data] = useInfiniteScroll<IQuestionList>({ api: getQuestions, loadingRef });

  const listItemRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!data) return;
    setQuestionData((prev) => {
      if (prev) return [...prev, ...data.questions];
      return [...data.questions];
    });
  }, [data]);

  return (
    <>
      <S.Layout>
        <h1 className="title">전체</h1>
        <ul ref={listItemRef}>
          {questionData?.map((question) => {
            const { id, hashtags, author_name, title, body, bounty, created_at, edited_at, author } = question;
            return (
              <QuestionCard
                key={id}
                id={id}
                hashtags={hashtags}
                author_name={author_name}
                title={title}
                body={body}
                bounty={bounty}
                author={author}
                created_at={created_at}
                edited_at={edited_at}
              />
            );
          })}
        </ul>
        <div ref={loadingRef} />
      </S.Layout>
    </>
  );
};

export default TotalQuestions;

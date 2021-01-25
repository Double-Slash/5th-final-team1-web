import React, { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnswerInput from "@components/Question/AnswerInput";
import AnswerList from "@components/Question/AnswerList";
import PostContent from "@components/Question/PostContent";
import PostTitle from "@components/Question/PostTitle";
import { getQuestion } from "@apis/question";
import useSkeleton from "@hooks/useSkeleton";
import { IQuestion } from "@typings/db";
import { questionInitialState } from "@typings/dbState";
import * as S from "./style";

const Question = () => {
  const [resultData, setResultData] = useState<IQuestion>(questionInitialState);
  const { id } = useParams<{ id: string }>();
  const [isLoading, skeletonRef] = useSkeleton<HTMLElement>({});

  useLayoutEffect(() => {
    const callback = async () => {
      const { data } = await getQuestion({ id: parseInt(id, 10) });
      setResultData(data);
    };
    callback();
  }, [id]);

  return (
    <>
      <S.Layout ref={skeletonRef}>
        {isLoading ? (
          <>
            <PostTitle
              author_name={resultData.author_name}
              created_at={resultData.created_at}
              hashtags={resultData.hashtags}
              id={resultData.id}
              is_liked={resultData.is_liked}
              like_id={resultData.like_id}
              title={resultData.title}
            />
            <PostContent author_id={resultData.author} body={resultData.body} />
            <AnswerInput
              answers={resultData.answers.length}
              author={resultData.author}
              questionId={resultData.id}
              appendAnswerList={setResultData}
            />
            <AnswerList answers={resultData.answers} />
          </>
        ) : (
          <S.Skeleton>
            <div className="hashtags">
              <div className="tag" />
              <div className="tag" />
              <div className="tag" />
            </div>
            <div className="title" />
            <div className="user-info" />
            <div className="content" />
            <div className="comment-input" />
            <div className="answer-list">
              <div className="answer" />
              <div className="answer" />
              <div className="answer" />
            </div>
          </S.Skeleton>
        )}
      </S.Layout>
    </>
  );
};

export default Question;

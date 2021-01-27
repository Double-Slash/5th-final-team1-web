import React, { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnswerInput from "@components/Question/AnswerInput";
import AnswerList from "@components/Question/AnswerList";
import PostContent from "@components/Question/PostContent";
import PostTitle from "@components/Question/PostTitle";
import MarkDownEditor from "@store/MarkDownEditor";
import { getQuestion } from "@apis/question";
import useSkeleton from "@hooks/useSkeleton";
import { IQuestion } from "@typings/db";
import { questionInitialState } from "@typings/dbState";
import * as S from "./style";

const Question = () => {
  const [resultData, setResultData] = useState<IQuestion>(questionInitialState);
  const { id } = useParams<{ id: string }>();
  const [isLoading, skeletonRef] = useSkeleton<HTMLElement>({});
  const {
    answers,
    author,
    author_name,
    body,
    created_at,
    hashtags,
    id: questionId,
    is_liked,
    like_id,
    title,
  } = resultData;

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
            <MarkDownEditor>
              <PostTitle
                author_name={author_name}
                created_at={created_at}
                hashtags={hashtags}
                id={questionId}
                is_liked={is_liked}
                like_id={like_id}
                title={title}
              />
              <PostContent author_id={author} body={body} questionId={questionId} title={title} />
              <AnswerInput answers={answers.length} questionId={questionId} appendAnswerList={setResultData} />
              <AnswerList answers={answers} owner={author} />
            </MarkDownEditor>
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

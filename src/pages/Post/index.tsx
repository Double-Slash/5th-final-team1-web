import React, { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentInput from "@components/Post/CommentInput";
import CommentList from "@components/Post/CommentList";
import PostContent from "@components/Post/PostContent";
import PostTitle from "@components/Post/PostTitle";
import { getQuestion } from "@apis/question";
import { IQuestion } from "@typings/db";
import { questionInitialState } from "@typings/dbState";
import * as S from "./style";

const Post = () => {
  const [resultData, setResultData] = useState<IQuestion>(questionInitialState);
  const { id } = useParams<{ id: string }>();

  useLayoutEffect(() => {
    const callback = async () => {
      const { data } = await getQuestion({ id: parseInt(id, 10) });
      setResultData(data);
    };
    callback();
  }, [id]);

  return (
    <>
      <S.Layout>
        <PostTitle title={resultData.title} hashtags={resultData.hashtags} created_at={resultData.created_at} />
        <PostContent body={resultData.body} />
        <CommentInput answers={resultData.answers.length} questionId={resultData.id} appendAnswerList={setResultData} />
        <CommentList questionId={resultData.id} answers={resultData.answers} />
      </S.Layout>
    </>
  );
};

export default Post;

import React from "react";
import Comment from "@common/Organisms/Comment";
import { IAnswer } from "@typings/db";
import * as S from "./style";

export interface CommentListProps {
  questionId: number;
  answers: IAnswer[];
}

const CommentList = ({ answers, questionId }: CommentListProps) => {
  return (
    <>
      <S.Layout>
        {answers.map((answer) => {
          const { id, author, created_at, body, num_likes, comments } = answer;
          return (
            <Comment
              key={created_at}
              questionId={questionId}
              answerId={id}
              author={author}
              created_at={created_at}
              body={body}
              num_likes={num_likes}
              comments={comments}
            />
          );
        })}
      </S.Layout>
    </>
  );
};

export default CommentList;

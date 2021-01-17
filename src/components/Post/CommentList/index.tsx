import React from "react";
// import Answer from "@common/Organisms/Answer";
import { IAnswer } from "@typings/db";
import * as S from "./style";

export interface CommentListProps {
  questionId?: number;
  answers: IAnswer[];
}

const CommentList = ({ answers }: CommentListProps) => {
  return (
    <>
      <S.Layout>
        {/* {answers.map((answer) => {
          const { author, author_name, body, comments, created_at, edited_at, id, num_likes } = answer;
          return (
            <Answer
              key={created_at}
              author={author}
              author_name={author_name}
              body={body}
              comments={comments}
              created_at={created_at}
              edited_at={edited_at}
              id={id}
              num_likes={num_likes}
            />
          );
        })} */}
      </S.Layout>
    </>
  );
};

export default CommentList;

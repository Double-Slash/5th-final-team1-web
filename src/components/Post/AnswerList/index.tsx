import React from "react";
import Answer from "@common/Organisms/Answer";
import { IAnswer } from "@typings/db";
import * as S from "./style";

export interface AnswerListProps {
  answers: IAnswer[];
}

const AnswerList = ({ answers }: AnswerListProps) => {
  return (
    <>
      <S.Layout>
        {answers.map((answer) => {
          const {
            author,
            author_name,
            body,
            comments,
            created_at,
            edited_at,
            id,
            is_liked,
            like_id,
            num_likes,
          } = answer;
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
              is_liked={is_liked}
              like_id={like_id}
              num_likes={num_likes}
            />
          );
        })}
      </S.Layout>
    </>
  );
};

export default AnswerList;

import React from "react";
import Answer from "@common/Organisms/Answer";
import MarkDownEditor from "@store/MarkDownEditor";
import { IAnswer } from "@typings/db";
import * as S from "./style";

export interface AnswerListProps {
  answers: IAnswer[];
  owner: number;
}

const AnswerList = ({ answers, owner }: AnswerListProps) => {
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
            <MarkDownEditor>
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
                owner={owner}
              />
            </MarkDownEditor>
          );
        })}
      </S.Layout>
    </>
  );
};

export default AnswerList;

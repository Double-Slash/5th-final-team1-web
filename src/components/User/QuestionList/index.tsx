import React from "react";
import QuestionCard from "@common/Molecules/PostCard/QuestionCard";
import { IQuestionListItem } from "@typings/db";

export interface QuestionListProps {
  my_questions?: IQuestionListItem[];
}

const QuestionList = ({ my_questions }: QuestionListProps) => {
  return (
    <>
      <ul>
        {my_questions?.map((question) => {
          const { author_name, body, created_at, hashtags, id, is_liked, like_id, title } = question;
          return (
            <QuestionCard
              author_name={author_name}
              body={body}
              created_at={created_at}
              hashtags={hashtags}
              id={id}
              is_liked={is_liked}
              like_id={like_id}
              title={title}
            />
          );
        })}
      </ul>
    </>
  );
};

export default QuestionList;

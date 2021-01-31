import React from "react";
import { MemoryRouter } from "react-router-dom";
import { withKnobs, number, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react/types-6-0";
import PageHeader from "@components/User/PageHeader";
import PostTabMenu from "@components/User/PostTabMenu";
import UserActivity from "@components/User/UserActivity";
import { dummyQuestionList, dummyProjectList } from "./dummy";
import * as S from "./style";

export default {
  title: "page/User",
  decorators: [withKnobs],
} as Meta;

const UserTemplate = () => {
  const userName = text("userName", "CharmingCheol");
  const answer_count = number("answer_count", 5);
  const comment_count = number("comment_count", 6);
  const jobposting_count = number("jobposting_count", 7);
  const question_count = number("question_count", 8);

  return (
    <>
      <MemoryRouter>
        <PageHeader userName={userName} />
        <S.Layout>
          <UserActivity
            answer_count={answer_count}
            comment_count={comment_count}
            jobposting_count={jobposting_count}
            question_count={question_count}
          />
          <PostTabMenu my_questions={dummyQuestionList} my_projects={dummyProjectList} />
        </S.Layout>
      </MemoryRouter>
    </>
  );
};
export const DefaultUser = UserTemplate.bind({});

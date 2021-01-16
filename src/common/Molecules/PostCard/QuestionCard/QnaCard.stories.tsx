import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs, array, number, text } from "@storybook/addon-knobs";
import { IQuestionListItem } from "@typings/db";
import QuestionCard from "./index";

export default {
  title: "molecules/QuestionCard",
  component: QuestionCard,
  decorators: [withKnobs],
} as Meta;

const Template: Story<IQuestionListItem> = () => {
  const id = number("id", 1);
  const hashtags = array("hashtags", ["h", "a", "s", "tags"]);
  const author_name = text("author_name", "차민철");
  const title = text("title", "제목");
  const body = text("body", "본문 부분");
  const created_at = text("created_at", "2021.01.09");
  const edited_at = text("edited_at", "2021.01.09");

  return (
    <>
      <MemoryRouter>
        <QuestionCard
          key={Math.floor(Math.random() * 1000) + 1}
          id={id}
          hashtags={hashtags}
          author_name={author_name}
          title={title}
          body={body}
          bounty={20}
          created_at={created_at}
          edited_at={edited_at}
          author={Math.floor(Math.random() * 1000) + 1}
        />
      </MemoryRouter>
    </>
  );
};

export const DefaultQuestionCard = Template.bind({});
DefaultQuestionCard.args = {};

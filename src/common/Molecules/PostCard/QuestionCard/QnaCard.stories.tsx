import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs, array, boolean, number, text } from "@storybook/addon-knobs";
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
  const is_liked = boolean("is_liked", false);

  return (
    <>
      <MemoryRouter>
        <QuestionCard
          key={Math.floor(Math.random() * 1000) + 1}
          author_name={author_name}
          body={body}
          created_at={created_at}
          hashtags={hashtags}
          id={id}
          is_liked={is_liked}
          like_id={1}
          title={title}
        />
      </MemoryRouter>
    </>
  );
};

export const DefaultQuestionCard = Template.bind({});
DefaultQuestionCard.args = {};

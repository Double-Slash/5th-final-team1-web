import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs, number, text } from "@storybook/addon-knobs";
import Comment, { CommentProps } from "./index";

export default {
  title: "organisms/Comment",
  component: Comment,
  decorators: [withKnobs],
} as Meta;

const CommentTemplate: Story<CommentProps> = () => {
  const author = text("author", "차민철");
  const created_at = text("created_at", "2021.01.08");
  const body = text("boy", "답변입니다");
  const num_likes = number("num_likes", 2);

  return (
    <>
      <Comment num_likes={num_likes} body={body} author={author} created_at={created_at} />
    </>
  );
};
export const DefaultComment = CommentTemplate.bind({});

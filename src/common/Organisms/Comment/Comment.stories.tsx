import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { IComment } from "@typings/db";
import { commentDummy } from "@typings/db.dummy";
import Comment from "./index";

export default {
  title: "organisms/Comment",
  component: Comment,
} as Meta;

const CommentTemplate: Story<IComment> = (args) => {
  return (
    <>
      <Comment {...args} />
    </>
  );
};
export const DefaultComment = CommentTemplate.bind({});
DefaultComment.args = commentDummy;

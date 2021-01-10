import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import CommentList, { CommentListProps } from "./index";

export default {
  title: "post/CommentList",
  component: CommentList,
} as Meta;

const CommentListTemplate: Story<CommentListProps> = (args) => {
  return (
    <>
      <CommentList {...args} />
    </>
  );
};
export const DefaultCommentList = CommentListTemplate.bind({});
DefaultCommentList.args = {
  answers: [],
};

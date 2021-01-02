import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { commentDummy } from "@typings/db.dummy";
import CommentList from "./index";

export default {
  title: "post/CommentList",
  component: CommentList,
} as Meta;

const CommentListTemplate = () => {
  return (
    <>
      <CommentList postData={[commentDummy, commentDummy]} />
    </>
  );
};
export const DefaultCommentList = CommentListTemplate.bind({});

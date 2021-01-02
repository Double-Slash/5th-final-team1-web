import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Meta, Story } from "@storybook/react/types-6-0";
import { postDummy } from "@typings/db.dummy";
import PostTitle, { PostTitleProps } from "./index";

export default {
  title: "post/PostTitle",
  component: PostTitle,
} as Meta;

const PostTitleTemplate: Story<PostTitleProps> = (args) => (
  <MemoryRouter>
    <PostTitle {...args} />
  </MemoryRouter>
);
export const DefaultPostTitle = PostTitleTemplate.bind({});
DefaultPostTitle.args = {
  postData: postDummy,
};

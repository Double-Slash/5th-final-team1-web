import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { postDummy } from "@typings/db.dummy";
import PostContent, { PostContentProps } from "./index";

export default {
  title: "post/PostContent",
  component: PostContent,
} as Meta;

const PostContentTemplate: Story<PostContentProps> = (args) => <PostContent {...args} />;
export const DefaultPostContent = PostContentTemplate.bind({});
DefaultPostContent.args = {
  postData: postDummy,
};

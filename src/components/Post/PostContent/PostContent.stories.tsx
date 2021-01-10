import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs, text } from "@storybook/addon-knobs";
import PostContent, { PostContentProps } from "./index";

export default {
  title: "post/PostContent",
  component: PostContent,
  decorators: [withKnobs],
} as Meta;

const PostContentTemplate: Story<PostContentProps> = (args) => {
  const body = text("body", "# 본문 부분입니다");

  return (
    <>
      <PostContent {...args} body={body} />
    </>
  );
};
export const DefaultPostContent = PostContentTemplate.bind({});
DefaultPostContent.args = {};

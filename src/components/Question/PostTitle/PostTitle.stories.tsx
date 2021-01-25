import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs, array, text } from "@storybook/addon-knobs";
import PostTitle, { PostTitleProps } from "./index";

export default {
  title: "post/PostTitle",
  component: PostTitle,
  decorators: [withKnobs],
} as Meta;

const PostTitleTemplate: Story<PostTitleProps> = (args) => {
  const title = text("title", "제목입니다");
  const hashtags = array("hashtags", ["해", "시", "태", "그"]);
  const created_at = text("created_at", "2021.01.07");
  return (
    <>
      <MemoryRouter>
        <PostTitle {...args} title={title} hashtags={hashtags} created_at={created_at} />
      </MemoryRouter>
    </>
  );
};
export const DefaultPostTitle = PostTitleTemplate.bind({});
DefaultPostTitle.args = {};

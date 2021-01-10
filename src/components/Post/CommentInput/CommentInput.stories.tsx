import React from "react";
import { Provider } from "react-redux";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs, number } from "@storybook/addon-knobs";
import store from "@store/index";
import CommentInput, { CommentInputProps } from "./index";

export default {
  title: "post/CommentInput",
  component: CommentInput,
  decorators: [withKnobs],
} as Meta;

const CommentInputTemplate: Story<CommentInputProps> = (args) => {
  const answer = number("answer", 2);
  return (
    <>
      <Provider store={store()}>
        <CommentInput {...args} answers={answer} />
      </Provider>
    </>
  );
};
export const DefaultCommentInput = CommentInputTemplate.bind({});
DefaultCommentInput.args = {};

import React from "react";
import configureStore from "redux-mock-store";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Provider } from "react-redux";
import { postDummy } from "@typings/db.dummy";
import CommentInput, { CommentInputProps } from "./index";

export default {
  title: "post/CommentInput",
  component: CommentInput,
} as Meta;

const mockStore = configureStore();
const store = mockStore({ markdown: { markDownText: "sdfsdfsd" } });
const CommentInputTemplate: Story<CommentInputProps> = (args) => (
  <Provider store={store}>
    <CommentInput {...args} />
  </Provider>
);
export const DefaultCommentInput = CommentInputTemplate.bind({});
DefaultCommentInput.args = {
  postData: postDummy,
};

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Textarea, { TextareaProps } from "./index";

export default {
  title: "atoms/Textarea",
  component: Textarea,
} as Meta;

const Template: Story<TextareaProps> = (args) => (
  <>
    <Textarea {...args} />
  </>
);

export const DefaultTextarea = Template.bind({});
DefaultTextarea.args = {
  onChange: () => {},
  onKeyDown: () => {},
  placeholder: "제목을 입력하세요",
};

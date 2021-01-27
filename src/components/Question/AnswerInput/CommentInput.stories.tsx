import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs, number } from "@storybook/addon-knobs";
import AnswerInput, { AnswerInputProps } from "./index";

export default {
  title: "post/AnswerInput",
  component: AnswerInput,
  decorators: [withKnobs],
} as Meta;

const AnswerInputTemplate: Story<AnswerInputProps> = (args) => {
  const answer = number("answer", 2);
  return (
    <>
      <AnswerInput {...args} answers={answer} />
    </>
  );
};
export const DefaultAnswerInput = AnswerInputTemplate.bind({});
DefaultAnswerInput.args = {};

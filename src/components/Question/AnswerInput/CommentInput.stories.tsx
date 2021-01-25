import React from "react";
import { Provider } from "react-redux";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs, number } from "@storybook/addon-knobs";
import store from "@store/index";
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
      <Provider store={store()}>
        <AnswerInput {...args} answers={answer} />
      </Provider>
    </>
  );
};
export const DefaultAnswerInput = AnswerInputTemplate.bind({});
DefaultAnswerInput.args = {};

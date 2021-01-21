import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import AnswerList, { AnswerListProps } from "./index";

export default {
  title: "post/AnswerList",
  component: AnswerList,
} as Meta;

const AnswerListTemplate: Story<AnswerListProps> = (args) => {
  return (
    <>
      <AnswerList {...args} />
    </>
  );
};
export const DefaultAnswerList = AnswerListTemplate.bind({});
DefaultAnswerList.args = {
  answers: [],
};

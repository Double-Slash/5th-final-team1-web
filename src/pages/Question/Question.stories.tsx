import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Meta } from "@storybook/react/types-6-0";
import Question from "./index";

export default {
  title: "page/Question",
  component: Question,
} as Meta;

const QuestionTemplate = () => {
  return (
    <>
      <MemoryRouter>
        <Question />
      </MemoryRouter>
    </>
  );
};
export const DefaultQuestion = QuestionTemplate.bind({});

import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Meta } from "@storybook/react/types-6-0";
import store from "@store/index";
import Question from "./index";

export default {
  title: "page/Question",
  component: Question,
} as Meta;

const QuestionTemplate = () => {
  return (
    <>
      <Provider store={store()}>
        <MemoryRouter>
          <Question />
        </MemoryRouter>
      </Provider>
    </>
  );
};
export const DefaultQuestion = QuestionTemplate.bind({});

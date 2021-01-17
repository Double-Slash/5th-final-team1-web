import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Meta } from "@storybook/react/types-6-0";
import store from "@store/index";
import WriteProject from "./index";

export default {
  title: "page/WriteProject",
  component: WriteProject,
} as Meta;

const WriteProjectTemplate = () => {
  return (
    <>
      <Provider store={store()}>
        <MemoryRouter>
          <WriteProject />
        </MemoryRouter>
      </Provider>
    </>
  );
};
export const DefaultWriteProject = WriteProjectTemplate.bind({});

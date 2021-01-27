import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Meta } from "@storybook/react/types-6-0";
import WriteProject from "./index";

export default {
  title: "page/WriteProject",
  component: WriteProject,
} as Meta;

const WriteProjectTemplate = () => {
  return (
    <>
      <MemoryRouter>
        <WriteProject />
      </MemoryRouter>
    </>
  );
};
export const DefaultWriteProject = WriteProjectTemplate.bind({});

import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Meta } from "@storybook/react/types-6-0";
import PageHeader from "./index";

export default {
  title: "projects/PageHeader",
  component: PageHeader,
} as Meta;

const PageHeaderTemplate = () => {
  return (
    <>
      <MemoryRouter>
        <PageHeader />
      </MemoryRouter>
    </>
  );
};
export const DefaultPageHeader = PageHeaderTemplate.bind({});

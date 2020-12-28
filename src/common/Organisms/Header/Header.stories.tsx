import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Meta } from "@storybook/react/types-6-0";
import Header from "./index";

export default {
  title: "organisms/Header",
  component: Header,
} as Meta;

const HeaderTemplate = () => (
  <MemoryRouter>
    <Header />
  </MemoryRouter>
);
export const DefaultHeader = HeaderTemplate.bind({});

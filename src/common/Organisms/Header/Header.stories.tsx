import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Meta } from "@storybook/react/types-6-0";
import Header from "./index";

export default {
  title: "organisms/Header",
  component: Header,
} as Meta;

// 텍스트만 있는 버튼
const TextHeaderTemplate = () => (
  <MemoryRouter>
    <Header />
  </MemoryRouter>
);
export const TextHeader = TextHeaderTemplate.bind({});

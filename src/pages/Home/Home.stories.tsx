import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Home from "./index";

export default {
  title: "page/Home",
  component: Home,
} as Meta;

const HomeTemplate = () => {
  return (
    <>
      <Home />
    </>
  );
};
export const DefaultHome = HomeTemplate.bind({});

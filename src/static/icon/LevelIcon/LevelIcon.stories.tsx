import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import LevelIcon from "./index";

export default {
  title: "static/LevelIcon",
  component: LevelIcon,
} as Meta;

const LevelIconTemplate = () => {
  return (
    <>
      <LevelIcon />
    </>
  );
};
export const DefaultLevelIcon = LevelIconTemplate.bind({});

import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { withKnobs } from "@storybook/addon-knobs";
import TitleInput from "./index";

export default {
  title: "writeProject/TitleInput",
  component: TitleInput,
  decorators: [withKnobs],
} as Meta;

const TitleInputTemplate = () => {
  return (
    <>
      <TitleInput />
    </>
  );
};
export const DefaultTitleInput = TitleInputTemplate.bind({});

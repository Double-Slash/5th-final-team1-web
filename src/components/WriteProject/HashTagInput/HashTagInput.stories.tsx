import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { withKnobs } from "@storybook/addon-knobs";
import HashTagInput from "./index";

export default {
  title: "writeProject/HashTagInput",
  component: HashTagInput,
  decorators: [withKnobs],
} as Meta;

const HashTagInputTemplate = () => {
  return (
    <>
      <HashTagInput />
    </>
  );
};
export const DefaultHashTagInput = HashTagInputTemplate.bind({});

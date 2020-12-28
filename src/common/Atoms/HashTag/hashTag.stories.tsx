import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Meta, Story } from "@storybook/react/types-6-0";
import HashTag, { HashTagProps } from "./index";

export default {
  title: "atoms/HashTag",
  component: HashTag,
} as Meta;

const Template: Story<HashTagProps> = (args) => (
  <>
    <MemoryRouter>
      <HashTag {...args} />
    </MemoryRouter>
  </>
);

export const DefaultHashTag = Template.bind({});
DefaultHashTag.args = {
  text: "text",
};

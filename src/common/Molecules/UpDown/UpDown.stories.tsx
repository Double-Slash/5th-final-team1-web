import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import UpDown, { UpDownProps } from "./index";

export default {
  title: "molecules/UpDown",
  component: UpDown,
} as Meta;

const Template: Story<UpDownProps> = (args) => (
  <>
    <UpDown {...args} />
  </>
);

export const DefaultUpDown = Template.bind({});
DefaultUpDown.args = {
  is_liked: "None",
  num_likes: [0, 0],
};

import React from "react";
import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react/types-6-0";
import Input, { InputProps } from "./index";

export default {
  title: "Atoms/Input",
  component: Input,
} as Meta;

const emptyInput: Story<InputProps> = () => {
  return <Input value="" onChange={action("onChange")} />;
};

const inputWithText = () => {
  return <Input value="inputWithText" onChange={action("onChange")} />;
};

const disabledInput = () => {
  return <Input value="" onChange={action("onChange")} disabled />;
};

export const EmptyInput = emptyInput.bind({});
export const InputWithText = inputWithText.bind({});
export const DisabledInput = disabledInput.bind({});

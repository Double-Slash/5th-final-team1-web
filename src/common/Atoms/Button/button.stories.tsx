import React from "react";
import { BsPaperclip } from "react-icons/bs";
import { Meta, Story } from "@storybook/react/types-6-0";
import Button, { ButtonProps } from "./index";

export default {
  title: "atoms/Button",
  component: Button,
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#000000" },
        { name: "white", value: "#ffffff" },
      ],
    },
  },
} as Meta;

// 텍스트만 있는 버튼
const TextButtonTemplate: Story<ButtonProps> = (args) => <Button {...args}>제출하기</Button>;
export const TextButton = TextButtonTemplate.bind({});
TextButton.args = {
  onClick: () => {},
};

// 아이콘만 있는 버튼
const IconButtonTemplate: Story<ButtonProps> = (args) => (
  <Button {...args}>
    <BsPaperclip />
  </Button>
);
export const IconButton = IconButtonTemplate.bind({});
IconButton.args = {
  onClick: () => {},
};

// 텍스트와 아이콘이 함께 있는 버튼
const WithIconButtonTemplate: Story<ButtonProps> = (args) => (
  <>
    <Button {...args}>
      왼쪽
      <BsPaperclip />
    </Button>
    <Button {...args}>
      <BsPaperclip />
      오른쪽
    </Button>
  </>
);
export const WithIconButton = WithIconButtonTemplate.bind({});
WithIconButton.args = {
  onClick: () => {},
};

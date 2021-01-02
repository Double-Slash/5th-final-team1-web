import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import LogInCheck, { LogInCheckProps } from "./index";

export default {
  title: "molecules/LogInCheck",
  component: LogInCheck,
} as Meta;

const LogInCheckTemplate: Story<LogInCheckProps> = (args) => (
  <LogInCheck {...args}>
    <div>전송하기</div>
  </LogInCheck>
);
export const DefaultLogInCheck = LogInCheckTemplate.bind({});
DefaultLogInCheck.args = {
  onClick: () => {},
};

import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Meta, Story } from "@storybook/react/types-6-0";
import LinkGroup, { LinkGroupProps } from "./index";

export default {
  title: "molecules/LinkGroup",
  component: LinkGroup,
  decorators: [
    (StoryDecorator) => (
      <div style={{ background: "black" }}>
        <StoryDecorator />
      </div>
    ),
  ],
} as Meta;

const Template: Story<LinkGroupProps> = (args) => (
  <>
    <MemoryRouter>
      <LinkGroup {...args} />
    </MemoryRouter>
  </>
);

export const DefaultLinkGroup = Template.bind({});
DefaultLinkGroup.args = {
  linkNamingList: ["QnA", "Tags", "Project", "Level"],
};

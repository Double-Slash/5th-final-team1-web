import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Meta, Story } from "@storybook/react/types-6-0";
import Link, { LinkProps } from "./index";

export default {
  title: "atoms/Link",
  component: Link,
  decorators: [
    (StoryDecorator) => (
      <div style={{ background: "black" }}>
        <StoryDecorator />
      </div>
    ),
  ],
} as Meta;

const Template: Story<LinkProps> = (args) => (
  <>
    <MemoryRouter>
      <Link {...args} />
    </MemoryRouter>
  </>
);

export const DefaultLink = Template.bind({});
DefaultLink.args = {
  name: "name",
};

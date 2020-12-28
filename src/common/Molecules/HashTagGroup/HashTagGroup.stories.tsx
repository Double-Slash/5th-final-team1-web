import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Meta, Story } from "@storybook/react/types-6-0";
import HashTagGroup, { HashTagGroupProps } from "./index";

export default {
  title: "molecules/HashTagGroup",
  component: HashTagGroup,
} as Meta;

const Template: Story<HashTagGroupProps> = (args) => (
  <>
    <MemoryRouter>
      <HashTagGroup {...args} />
    </MemoryRouter>
  </>
);

export const DefaultHashTagGroup = Template.bind({});
DefaultHashTagGroup.args = {
  namingList: ["더블슬래쉬", "개발자", "developer"],
};

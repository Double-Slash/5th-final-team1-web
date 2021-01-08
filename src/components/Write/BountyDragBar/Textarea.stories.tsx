import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import BuountyDragBar from "./index";

export default {
  title: "write/BuountyDragBar",
  component: BuountyDragBar,
} as Meta;

const Template = () => (
  <>
    <BuountyDragBar />
  </>
);

export const DefaultBuountyDragBar = Template.bind({});

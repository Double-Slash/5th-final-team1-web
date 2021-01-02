import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import MarkDownToolBar from "./index";

export default {
  title: "organisms/MarkDownToolBar",
  component: MarkDownToolBar,
} as Meta;

const MarkDownToolBarTemplate = () => <MarkDownToolBar />;
export const DefaultMarkDownToolBar = MarkDownToolBarTemplate.bind({});

import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import TagIcon from "./index";

export default {
  title: "static/TagIcon",
  component: TagIcon,
} as Meta;

const TagIconTemplate = () => {
  return (
    <>
      <TagIcon />
    </>
  );
};
export const DefaultTagIcon = TagIconTemplate.bind({});

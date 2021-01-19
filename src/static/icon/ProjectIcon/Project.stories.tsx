import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import ProjectIcon from "./index";

export default {
  title: "static/ProjectIcon",
  component: ProjectIcon,
} as Meta;

const ProjectIconTemplate = () => {
  return (
    <>
      <ProjectIcon />
    </>
  );
};
export const DefaultProjectIcon = ProjectIconTemplate.bind({});

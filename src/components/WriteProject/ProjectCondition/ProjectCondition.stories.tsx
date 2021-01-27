import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { withKnobs } from "@storybook/addon-knobs";
import ProjectCondition from "./index";

export default {
  title: "writeProject/ProjectCondition",
  component: ProjectCondition,
  decorators: [withKnobs],
} as Meta;

const ProjectConditionTemplate = () => {
  return (
    <>
      <ProjectCondition />
    </>
  );
};
export const DefaultProjectCondition = ProjectConditionTemplate.bind({});

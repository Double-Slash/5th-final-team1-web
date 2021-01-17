import React from "react";
import { Provider } from "react-redux";
import { Meta } from "@storybook/react/types-6-0";
import { withKnobs } from "@storybook/addon-knobs";
import store from "@store/index";
import ProjectCondition from "./index";

export default {
  title: "writeProject/ProjectCondition",
  component: ProjectCondition,
  decorators: [withKnobs],
} as Meta;

const ProjectConditionTemplate = () => {
  return (
    <>
      <Provider store={store()}>
        <ProjectCondition />
      </Provider>
    </>
  );
};
export const DefaultProjectCondition = ProjectConditionTemplate.bind({});

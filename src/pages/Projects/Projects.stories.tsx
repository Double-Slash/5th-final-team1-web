import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Meta } from "@storybook/react/types-6-0";
import Projects from "./index";

export default {
  title: "page/Projects",
  component: Projects,
} as Meta;

const ProjectsTemplate = () => {
  return (
    <>
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    </>
  );
};
export const DefaultProjects = ProjectsTemplate.bind({});

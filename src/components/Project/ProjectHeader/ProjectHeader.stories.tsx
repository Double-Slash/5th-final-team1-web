import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs, array, text } from "@storybook/addon-knobs";
import ProjectHeader, { ProjectHeaderProps } from "./index";

export default {
  title: "project/ProjectHeader",
  component: ProjectHeader,
  decorators: [withKnobs],
} as Meta;

const ProjectHeaderTemplate: Story<ProjectHeaderProps> = (args) => {
  const author_name = text("author_name", "charmingCheol");
  const created_at = text("created_at", "2021.01.17");
  const crew_condition = text("crew_condition", "서울/수도권 거주");
  const crew_count = text("crew_count", "2명");
  const crew_field = text("crew_field", "백앤드 개발자");
  const crew_recruit = text("crew_recruit", "2021.01.17~2021.01.23");
  const hashtags = array("hashtags", ["javascript", "python"]);
  const title = text("title", "제목입니다");

  return (
    <>
      <MemoryRouter>
        <ProjectHeader
          {...args}
          author_name={author_name}
          created_at={created_at}
          crew_condition={crew_condition}
          crew_count={crew_count}
          crew_field={crew_field}
          crew_recruit={crew_recruit}
          hashtags={hashtags}
          title={title}
        />
      </MemoryRouter>
    </>
  );
};
export const DefaultProjectHeader = ProjectHeaderTemplate.bind({});

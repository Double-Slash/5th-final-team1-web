import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs, array, text } from "@storybook/addon-knobs";
import ProjectCard, { ProjectCardProps } from "./index";

export default {
  title: "molecules/ProjectCard",
  component: ProjectCard,
  decorators: [withKnobs],
} as Meta;

const Template: Story<ProjectCardProps> = (args) => {
  const author_name = text("author_name", "CharmingCheol");
  const created_at = text("created_at", "2021.01.09");
  const crew_field = text("crew_field", "백앤드 개발자");
  const hashtags = array("hashtags", ["h", "a", "s", "tags"]);
  const title = text("title", "제목");

  return (
    <>
      <MemoryRouter>
        <ProjectCard
          {...args}
          author_name={author_name}
          created_at={created_at}
          crew_field={crew_field}
          hashtags={hashtags}
          title={title}
        />
      </MemoryRouter>
    </>
  );
};

export const DefaultProjectCard = Template.bind({});
DefaultProjectCard.args = {
  id: 1,
};

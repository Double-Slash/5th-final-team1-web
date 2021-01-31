import React from "react";
import ProjectCard from "@common/Molecules/PostCard/ProjectCard";
import { IProjectListItem } from "@typings/db";

export interface ProjectListProps {
  my_Projects?: IProjectListItem[];
}

const ProjectList = ({ my_Projects }: ProjectListProps) => {
  return (
    <>
      <ul>
        {my_Projects?.map((Project) => {
          const { author_name, created_at, crew_field, hashtags, id, is_liked, like_id, title } = Project;
          return (
            <ProjectCard
              author_name={author_name}
              created_at={created_at}
              crew_field={crew_field}
              hashtags={hashtags}
              id={id}
              is_liked={is_liked}
              like_id={like_id}
              title={title}
            />
          );
        })}
      </ul>
    </>
  );
};

export default ProjectList;

import React from "react";
import ProjectCard from "@common/Molecules/PostCard/ProjectCard";
import usePaginationScroll from "@hooks/usePaginationScroll";
import { IProjectSearch } from "@typings/db";
import { getJobPostingsSearch } from "@apis/search";

export interface ProjectPanelProps {
  lastId: number;
  searchList: IProjectSearch[] | undefined;
  searchText: string;
}

const ProjectPanel = ({ lastId, searchList, searchText }: ProjectPanelProps) => {
  const [resultData, loadingRef] = usePaginationScroll<IProjectSearch, HTMLDivElement>({
    api: getJobPostingsSearch,
    dataTable: "jobpostings",
    lastId,
    searchList,
    searchText,
  });

  return (
    <>
      <section>
        {resultData?.map((value: IProjectSearch) => {
          const { author_name, created_at, crew_field, hashtags, id, is_liked, like_id, title } = value;
          return (
            <ProjectCard
              key={title}
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
        <div ref={loadingRef} />
      </section>
    </>
  );
};

export default ProjectPanel;

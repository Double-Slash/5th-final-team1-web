import React from "react";
import ProjectCard from "@common/Molecules/PostCard/ProjectCard";
import useSkeleton from "@hooks/useSkeleton";
import { IProjectDetail } from "@typings/db";
import * as S from "./style";

export interface TotalProjectListProps {
  listData: IProjectDetail[];
}

const TotalProjectList = ({ listData }: TotalProjectListProps) => {
  const [isLoad, skeletonRef] = useSkeleton({ threshold: 0 });

  return (
    <>
      <S.Layout ref={skeletonRef}>
        {isLoad ? (
          listData.map((item) => {
            const { author_name, created_at, crew_field, hashtags, id, title } = item;
            return (
              <ProjectCard
                key={id}
                author_name={author_name}
                created_at={created_at}
                crew_field={crew_field}
                hashtags={hashtags}
                id={id}
                title={title}
              />
            );
          })
        ) : (
          <>
            {Array(12)
              .fill(0)
              .map(() => (
                <S.SkeletonItem key={Math.random() * 10}>
                  <div className="container">
                    <div className="title" />
                    <div className="field" />
                    <div className="hash-tags">
                      <div className="hash-tag" />
                      <div className="hash-tag" />
                    </div>
                    <div className="footer">
                      <div className="image" />
                      <div className="title" />
                    </div>
                  </div>
                </S.SkeletonItem>
              ))}
          </>
        )}
      </S.Layout>
    </>
  );
};

export default TotalProjectList;

import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import ProjectContent from "@components/Project/ProjectContent";
import ProjectFooter from "@components/Project/ProjectFooter";
import ProjectHeader from "@components/Project/ProjectHeader";
import MarkDownEditor from "@store/MarkDownEditor";
import useSkeleton from "@hooks/useSkeleton";
import { getProjectDetail } from "@apis/project";
import { IProjectDetail } from "@typings/db";
import { projectInitialState } from "@typings/dbState";
import * as S from "./style";

const Project = () => {
  const [resultData, setResultData] = useState<IProjectDetail>(projectInitialState);
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [isLoading, skeletonRef] = useSkeleton<HTMLElement>({});

  useEffect(() => {
    const callback = async () => {
      try {
        const { data } = await getProjectDetail({ id });
        setResultData(data);
      } catch (error) {
        if (error.response.status === 404) {
          history.replace("/");
        }
      }
    };
    callback();
  }, [history, id]);

  return (
    <>
      <S.Layout ref={skeletonRef}>
        {isLoading ? (
          <>
            <MarkDownEditor>
              <ProjectHeader
                author_name={resultData.author_name}
                created_at={resultData.created_at}
                crew_condition={resultData.crew_condition}
                crew_count={resultData.crew_count}
                crew_field={resultData.crew_field}
                crew_recruit={resultData.crew_recruit}
                hashtags={resultData.hashtags}
                id={resultData.id}
                is_liked={resultData.is_liked}
                like_id={resultData.like_id}
                title={resultData.title}
              />
              <ProjectContent editorText={resultData.body} />
              <ProjectFooter />
            </MarkDownEditor>
          </>
        ) : (
          <S.Skeleton>
            <div className="hash-tag">
              <div className="tag" />
              <div className="tag" />
              <div className="tag" />
            </div>
            <div className="title" />
            <div className="user-info">
              <div className="thumbnail" />
              <div className="user-name" />
              <div className="rank" />
            </div>
            <div className="project-condition">
              <div className="condition" />
              <div className="condition" />
              <div className="condition" />
              <div className="condition" />
            </div>
            <div className="content" />
            <div className="button" />
          </S.Skeleton>
        )}
      </S.Layout>
    </>
  );
};

export default Project;

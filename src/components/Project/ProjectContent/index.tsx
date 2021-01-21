import React from "react";
import MarkDownRendering from "@common/Organisms/MarkDownRendering";
import * as S from "./style";

export interface ProjectContentProps {
  body: string;
}

const ProjectContent = ({ body }: ProjectContentProps) => {
  return (
    <>
      <S.Layout>
        <MarkDownRendering markDownText={body} />
      </S.Layout>
    </>
  );
};

export default ProjectContent;

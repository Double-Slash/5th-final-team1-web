import React from "react";
import MarkDownRendering from "@common/Organisms/MarkDownRendering";
import * as S from "./style";

export interface ProjectContentProps {
  editorText: string;
}

const ProjectContent = ({ editorText }: ProjectContentProps) => {
  return (
    <>
      <S.Layout>
        <MarkDownRendering editorText={editorText} />
      </S.Layout>
    </>
  );
};

export default ProjectContent;

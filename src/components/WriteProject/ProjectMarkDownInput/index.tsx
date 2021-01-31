import React from "react";
import MarkDownInput from "@common/Organisms/MarkDownInput";
import * as S from "./style";

const ProjectMarkDownInput = () => {
  return (
    <>
      <S.Layout>
        <MarkDownInput className="markdown-input" />
      </S.Layout>
    </>
  );
};

export default ProjectMarkDownInput;

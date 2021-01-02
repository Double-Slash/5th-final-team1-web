import React from "react";
import { useSelector } from "react-redux";

import { rootState } from "@store/index";
import MarkDownRendering from "@common/Organisms/MarkDownRendering";
import * as S from "./style";

const EditorPreview = () => {
  const title = useSelector((state: rootState) => state.markdown.title);
  const markDownText = useSelector((state: rootState) => state.markdown.markDownText);

  return (
    <>
      <S.TitleWrapper>{title}</S.TitleWrapper>
      <MarkDownRendering markDownText={markDownText} />
    </>
  );
};

export default EditorPreview;

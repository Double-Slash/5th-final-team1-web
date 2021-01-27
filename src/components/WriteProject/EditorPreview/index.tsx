import React, { useContext } from "react";
import MarkDownRendering from "@common/Organisms/MarkDownRendering";
import { MarkDownEditorContext } from "@store/MarkDownEditor";
import * as S from "./style";

const EditorPreview = () => {
  const { editorText, title } = useContext(MarkDownEditorContext);

  return (
    <>
      <S.TitleWrapper>{title}</S.TitleWrapper>
      <MarkDownRendering editorText={editorText} />
    </>
  );
};

export default EditorPreview;

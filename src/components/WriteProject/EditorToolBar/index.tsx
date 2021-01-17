import React from "react";
import MarkDownToolBar from "@common/Organisms/MarkDownToolBar";
import * as S from "./style";

const EditorToolBar = () => {
  return (
    <>
      <S.Layout>
        <MarkDownToolBar />
      </S.Layout>
    </>
  );
};

export default EditorToolBar;

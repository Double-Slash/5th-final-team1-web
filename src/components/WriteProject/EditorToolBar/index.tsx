import React from "react";
import MarkDownToolBar from "@common/Organisms/MarkDownToolBar";
import { WRITE_PAGE_MARKDOWN_TOOLBAR } from "@utils/const";
import * as S from "./style";

const EditorToolBar = () => {
  return (
    <>
      <S.Layout>
        <MarkDownToolBar toolBarList={WRITE_PAGE_MARKDOWN_TOOLBAR} />
      </S.Layout>
    </>
  );
};

export default EditorToolBar;

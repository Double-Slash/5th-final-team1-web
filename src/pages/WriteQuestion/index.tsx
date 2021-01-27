import React from "react";
import BountyDragBar from "@components/WriteQuestion/BountyDragBar";
import EditorFooter from "@components/WriteQuestion/EditorFooter";
import EditorPreview from "@components/WriteQuestion/EditorPreview";
import TitleInput from "@components/WriteQuestion/TitleInput";
import MarkDownToolBar from "@common/Organisms/MarkDownToolBar";
import MarkDownInput from "@common/Organisms/MarkDownInput";
import TestMarkDownEditor from "@store/MarkDownEditor";
import { WRITE_PAGE_MARKDOWN_TOOLBAR } from "@utils/const";
import * as S from "./style";

const WriteQuestion = () => {
  return (
    <>
      <S.Layout>
        <TestMarkDownEditor>
          <S.Section className="left-section">
            <TitleInput />
            <MarkDownToolBar toolBarList={WRITE_PAGE_MARKDOWN_TOOLBAR} />
            <MarkDownInput />
            <BountyDragBar />
            <EditorFooter />
          </S.Section>
          <S.Section className="right-section">
            <EditorPreview />
          </S.Section>
        </TestMarkDownEditor>
      </S.Layout>
    </>
  );
};

export default WriteQuestion;

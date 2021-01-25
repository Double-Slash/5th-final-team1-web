import React from "react";
import BountyDragBar from "@components/WriteQuestion/BountyDragBar";
import EditorFooter from "@components/WriteQuestion/EditorFooter";
import EditorPreview from "@components/WriteQuestion/EditorPreview";
import TitleInput from "@components/WriteQuestion/TitleInput";
import MarkDownInput from "@common/Organisms/MarkDownInput";
import MarkDownToolBar from "@common/Organisms/MarkDownToolBar";
import * as S from "./style";

const WriteQuestion = () => {
  return (
    <>
      <S.Layout>
        <S.Section className="left-section">
          <TitleInput />
          <MarkDownToolBar />
          <MarkDownInput />
          <BountyDragBar />
          <EditorFooter />
        </S.Section>
        <S.Section className="right-section">
          <EditorPreview />
        </S.Section>
      </S.Layout>
    </>
  );
};

export default WriteQuestion;

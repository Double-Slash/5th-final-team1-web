import React from "react";
import EditorFooter from "@components/Write/EditorFooter";
import EditorPreview from "@components/Write/EditorPreview";
import TitleInput from "@components/Write/TitleInput";
import MarkDownInput from "@common/Organisms/MarkDownInput";
import MarkDownToolBar from "@common/Organisms/MarkDownToolBar";
import * as S from "./style";

const Write = () => {
  return (
    <>
      <S.Layout>
        <S.Section className="left-section">
          <TitleInput />
          <MarkDownToolBar />
          <MarkDownInput />
          <EditorFooter />
        </S.Section>
        <S.Section className="right-section">
          <EditorPreview />
        </S.Section>
      </S.Layout>
    </>
  );
};

export default Write;

import React from "react";

import EditorFooter from "@components/Write/EditorFooter";
import EditorPreview from "@components/Write/EditorPreview";
import EditorToolbar from "@components/Write/EditorToolbar";
import MarkDownEditor from "@components/Write/MarkDownEditor";
import TitleInput from "@components/Write/TitleInput";
import * as S from "./style";

const Write = () => {
  return (
    <>
      <S.Layout>
        <S.Section className="left-section">
          <TitleInput />
          <EditorToolbar />
          <MarkDownEditor />
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

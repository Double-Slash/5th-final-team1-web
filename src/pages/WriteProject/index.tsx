import React from "react";
import EditorFooter from "@components/WriteProject/EditorFooter";
import EditorPreview from "@components/WriteProject/EditorPreview";
import EditorToolBar from "@components/WriteProject/EditorToolBar";
import HashTagInput from "@components/WriteProject/HashTagInput";
import MarkDownEditor from "@components/WriteProject/MarkDownEditor";
import TitleInput from "@components/WriteProject/TitleInput";
import ProjectCondition from "@components/WriteProject/ProjectCondition";
import * as S from "./style";

const WriteProject = () => {
  return (
    <>
      <S.Layout>
        <S.Section className="left-section">
          <TitleInput />
          <ProjectCondition />
          <HashTagInput />
          <EditorToolBar />
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

export default WriteProject;

import React from "react";
import EditorFooter from "@components/WriteProject/EditorFooter";
import EditorPreview from "@components/WriteProject/EditorPreview";
import EditorToolBar from "@components/WriteProject/EditorToolBar";
import HashTagInput from "@components/WriteProject/HashTagInput";
import ProjectMarkDownInput from "@components/WriteProject/ProjectMarkDownInput";
import TitleInput from "@components/WriteProject/TitleInput";
import ProjectCondition from "@components/WriteProject/ProjectCondition";
import MarkDownEditor from "@store/MarkDownEditor";
import * as S from "./style";

const WriteProject = () => {
  return (
    <>
      <S.Layout>
        <MarkDownEditor>
          <S.Section className="left-section">
            <TitleInput />
            <ProjectCondition />
            <HashTagInput />
            <EditorToolBar />
            <ProjectMarkDownInput />
            <EditorFooter />
          </S.Section>
          <S.Section className="right-section">
            <EditorPreview />
          </S.Section>
        </MarkDownEditor>
      </S.Layout>
    </>
  );
};

export default WriteProject;

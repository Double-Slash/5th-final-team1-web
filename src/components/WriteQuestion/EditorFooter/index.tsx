import React, { useCallback, useContext } from "react";
import { MarkDownEditorContext } from "@store/MarkDownEditor";
import { WriteQuestionContext } from "@store/WriteQuestion";
import { useHistory } from "react-router-dom";
import Button from "@common/Atoms/Button";
import { postQuestion } from "@apis/write";

import * as S from "./style";

const EditorFooter = () => {
  const { editorText, title } = useContext(MarkDownEditorContext);
  const { bounty, tagList } = useContext(WriteQuestionContext);
  const history = useHistory();

  // 제출하기 버튼 클릭
  const submitQuestion = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const result = await postQuestion({ title, body: editorText, bounty, hashtags: tagList });
      history.replace(`/qna/${result.data.id}`);
    },
    [bounty, editorText, history, tagList, title],
  );

  return (
    <>
      <S.Layout onSubmit={submitQuestion}>
        <Button isLinked={false} onClick={() => {}} type="submit" fontColor="white" buttonColor="black">
          제출하기
        </Button>
      </S.Layout>
    </>
  );
};

export default EditorFooter;

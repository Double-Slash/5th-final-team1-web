import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { rootState } from "@store/index";
import Button from "@common/Atoms/Button";
import { postQuestion } from "@apis/write";
import * as S from "./style";

const EditorFooter = () => {
  const history = useHistory();
  const title = useSelector((state: rootState) => state.markdown.title);
  const body = useSelector((state: rootState) => state.markdown.markDownText);
  const bounty = useSelector((state: rootState) => state.write.bounty);
  const hashtags = useSelector((state: rootState) => state.write.tagList);

  // 제출하기 버튼 클릭
  const submitQuestion = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const result = await postQuestion({ title, body, bounty, hashtags });
      history.replace(`/post/${result.data.id}`);
    },
    [body, bounty, hashtags, history, title],
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

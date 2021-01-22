import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { rootState, reduxClear } from "@store/index";
import Button from "@common/Atoms/Button";
import { postQuestion } from "@apis/write";

import * as S from "./style";

const EditorFooter = () => {
  const dispatch = useDispatch();
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
      dispatch(reduxClear());
      history.replace(`/post/${result.data.id}`);
    },
    [body, bounty, dispatch, hashtags, history, title],
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

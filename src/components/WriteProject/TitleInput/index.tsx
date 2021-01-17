import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { changeMarkDownTitle } from "@store/MarkDown/action";
import Textarea from "@common/Atoms/Textarea";
import * as S from "./style";

const TitleInput = () => {
  const dispatch = useDispatch();

  // 제목 변경
  const changeTitle = useCallback(
    (text: string) => {
      dispatch(changeMarkDownTitle(text));
    },
    [dispatch],
  );

  return (
    <>
      <S.Article>
        <Textarea onChange={changeTitle} placeholder="제목을 입력하세요" />
      </S.Article>
    </>
  );
};

export default TitleInput;

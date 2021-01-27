import React, { useCallback, useContext } from "react";
import Textarea from "@common/Atoms/Textarea";
import { MarkDownEditorContext } from "@store/MarkDownEditor";
import { changeTitleAction } from "@store/MarkDownEditor/action";
import * as S from "./style";

const TitleInput = () => {
  const { dispatch } = useContext(MarkDownEditorContext);

  // 제목 변경
  const changeTitle = useCallback(
    (text: string) => {
      dispatch(changeTitleAction(text));
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

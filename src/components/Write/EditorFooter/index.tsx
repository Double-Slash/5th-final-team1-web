import React, { useCallback } from "react";
import Button from "@common/Atoms/Button";
import * as S from "./style";

const EditorFooter = () => {
  const onClickSubmit = useCallback(() => {}, []);

  return (
    <>
      <S.Layout>
        <Button isLinked={false} fontColor="white" buttonColor="black" onClick={onClickSubmit}>
          제출하기
        </Button>
      </S.Layout>
    </>
  );
};

export default EditorFooter;

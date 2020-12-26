import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import Button from "@common/Atoms/Button";

const EditorFooter = () => {
  const history = useHistory();
  const onClickGoBack = useCallback(() => {
    history.goBack();
  }, [history]);

  const onClickPreview = useCallback(() => {}, []);

  const onClickSubmit = useCallback(() => {}, []);

  return (
    <>
      <Button isLinked={false} onClick={onClickGoBack}>
        뒤로가기
      </Button>
      <Button isLinked={false} onClick={onClickPreview}>
        미리보기
      </Button>
      <Button isLinked={false} onClick={onClickSubmit}>
        제출하기
      </Button>
    </>
  );
};

export default EditorFooter;

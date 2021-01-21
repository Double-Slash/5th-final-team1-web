import React, { useCallback } from "react";
import Button from "@common/Atoms/Button";
import * as S from "./style";

const ProjectFooter = () => {
  const clickApplyButton = useCallback(() => {}, []);

  return (
    <>
      <S.Layout>
        <Button isLinked={false} onClick={clickApplyButton} buttonColor="black" fontColor="white">
          지원하기
        </Button>
      </S.Layout>
    </>
  );
};

export default ProjectFooter;

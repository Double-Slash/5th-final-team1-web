import React from "react";
import Link from "@common/Atoms/Link";
import { getAccessToken } from "@utils/modules/token";
import QnaHeaderSvg from "@static/qnaHeaderSvg";
import * as S from "./style";

const PageHeader = () => {
  return (
    <>
      <S.Layout>
        <S.Wrapper>
          <h1>
            Ask
            <br />
            Your Problem
          </h1>
          <div className="wrapper">
            <QnaHeaderSvg />
            {getAccessToken({ key: "access" }) && <Link to="write">질문하기</Link>}
          </div>
        </S.Wrapper>
      </S.Layout>
    </>
  );
};

export default PageHeader;

import React from "react";
import Link from "@common/Atoms/Link";
import { getAccessToken } from "@utils/modules/token";
import ProjectHeaderSvg from "@static/projectHeaderSvg";
import * as S from "./style";

const PageHeader = () => {
  return (
    <>
      <>
        <S.Layout>
          <S.Wrapper>
            <h1>
              Connect
              <br />
              Your Developer
            </h1>
            <div className="wrapper">
              <ProjectHeaderSvg />
              {getAccessToken({ key: "access" }) && <Link to="write/project">모집하기</Link>}
            </div>
          </S.Wrapper>
        </S.Layout>
      </>
    </>
  );
};

export default PageHeader;

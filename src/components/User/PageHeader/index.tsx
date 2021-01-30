import React from "react";
import { BsFillPersonFill, BsFillEnvelopeFill } from "react-icons/bs";
import ProfileImage from "@common/Atoms/ProfileImage";
import UserName from "@common/Atoms/UserName";
import sliceUserName from "@utils/modules/sliceUserName";
import * as S from "./style";

export interface PageHeaderProps {
  userName: string;
}

const PageHeader = ({ userName }: PageHeaderProps) => {
  return (
    <>
      <S.Layout>
        <S.Wrapper>
          <ProfileImage imageSrc={userName} radius={64} />
          <S.UserNameWrapper>
            <div className="text-wrapper">
              <BsFillPersonFill />
              <UserName username={userName} />
            </div>
            <div className="text-wrapper">
              <BsFillEnvelopeFill />
              <span>{`https://github.com/${sliceUserName(userName)}`}</span>
            </div>
          </S.UserNameWrapper>
        </S.Wrapper>
      </S.Layout>
    </>
  );
};

export default PageHeader;

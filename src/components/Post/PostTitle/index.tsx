import React from "react";
import HashTagGroup from "@common/Molecules/HashTagGroup";
// import ProfileImage from "@common/Atoms/ProfileImage";
import calcDate from "@utils/modules/calcDate";
import * as S from "./style";

export interface PostTitleProps {
  title: string;
  hashtags: string[];
  created_at: string;
}

const PostTitle = ({ title, hashtags, created_at }: PostTitleProps) => {
  return (
    <>
      <S.PostTitle>
        <HashTagGroup namingList={hashtags} />
        <h1>{title}</h1>
        <div className="user-info">
          {/* <ProfileImage imageSrc={thumbnail} />
          <h2>{username}</h2>
          <h3>{rank}</h3> */}
          <span>{calcDate({ date: created_at })}</span>
        </div>
      </S.PostTitle>
    </>
  );
};

export default PostTitle;

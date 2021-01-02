import React from "react";
import HashTagGroup from "@common/Molecules/HashTagGroup";
import ProfileImage from "@common/Atoms/ProfileImage";
import { IPost } from "@typings/db";
import { postDummy } from "@typings/db.dummy";
import * as S from "./style";

export interface PostTitleProps {
  postData: IPost;
}

const PostTitle = ({ postData = postDummy }: PostTitleProps) => {
  const {
    title,
    hashTagList,
    user: { username, thumbnail, rank },
    date,
  } = postData;

  return (
    <>
      <S.PostTitle>
        <HashTagGroup namingList={hashTagList} />
        <h1>{title}</h1>
        <div className="user-info">
          <ProfileImage imageSrc={thumbnail} />
          <h2>{username}</h2>
          <h3>{rank}</h3>
          <span>{date}</span>
        </div>
      </S.PostTitle>
    </>
  );
};

export default PostTitle;

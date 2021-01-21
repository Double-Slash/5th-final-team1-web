import React from "react";
import LikeButton from "@common/Atoms/LikeButton";
import ProfileImage from "@common/Atoms/ProfileImage";
import UserName from "@common/Atoms/UserName";
import HashTagGroup from "@common/Molecules/HashTagGroup";
import calcDate from "@utils/modules/calcDate";
import * as S from "./style";

export interface PostTitleProps {
  author_name: string;
  created_at: string;
  hashtags: string[];
  id: number;
  is_liked: boolean;
  like_id: number;
  title: string;
}

const PostTitle = ({ author_name, created_at, hashtags, id, is_liked, like_id, title }: PostTitleProps) => {
  return (
    <>
      <S.PostTitle>
        <div className="hash-tag-list">
          <HashTagGroup namingList={hashtags} />
          <LikeButton is_liked={is_liked} question={id} like_id={like_id} />
        </div>
        <h1>{title}</h1>
        <div className="user-info">
          <ProfileImage imageSrc={author_name} />
          <UserName username={author_name} className="user-name" />
          <h3>플래티넘</h3>
          <span className="created-at">{calcDate({ date: created_at })}</span>
        </div>
      </S.PostTitle>
    </>
  );
};

export default PostTitle;

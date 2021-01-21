import React from "react";
import LikeButton from "@common/Atoms/LikeButton";
import ProfileImage from "@common/Atoms/ProfileImage";
import UserName from "@common/Atoms/UserName";
import HashTagGroup from "@common/Molecules/HashTagGroup";
import calcDate from "@utils/modules/calcDate";
import * as S from "./style";

export interface ProjectHeaderProps {
  author_name: string;
  created_at: string;
  crew_condition: string;
  crew_count: string;
  crew_field: string;
  crew_recruit: string;
  hashtags: string[];
  id: number;
  is_liked: boolean;
  like_id: number;
  title: string;
}

const ProjectHeader = ({
  author_name,
  created_at,
  crew_condition,
  crew_count,
  crew_field,
  crew_recruit,
  hashtags,
  id,
  is_liked,
  like_id,
  title,
}: ProjectHeaderProps) => {
  return (
    <>
      <S.Layout>
        <article>
          <div className="hash-tag-wrapper">
            <HashTagGroup className="hashtags" namingList={hashtags} />
            <LikeButton is_liked={is_liked} like_id={like_id} jobposting={id} />
          </div>
          <h1>{title}</h1>
          <div className="user-info">
            <ProfileImage imageSrc={author_name} />
            <UserName className="user-name" username={author_name} />
            <span className="date">{calcDate({ date: created_at })}</span>
          </div>
        </article>
        <S.ProjectCondition>
          <div>
            <span>모집분야</span>
            <p>{crew_field}</p>
          </div>
          <div>
            <span>모집인원</span>
            <p>{crew_count}</p>
          </div>
          <div>
            <span>모집기간</span>
            <p>{crew_recruit}</p>
          </div>
          <div>
            <span>모집조건</span>
            <p>{crew_condition}</p>
          </div>
        </S.ProjectCondition>
      </S.Layout>
    </>
  );
};

export default ProjectHeader;
